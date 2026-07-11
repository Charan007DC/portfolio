'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(77, 169, 255, 0.5)';
        ctx.fill();

        particles.forEach((particle2, j) => {
          if (i === j) return;
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.strokeStyle = `rgba(77, 169, 255, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-500 via-dark-400 to-dark-600"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20">
                ✨ Early Access Beta
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold"
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Dhaksha Charan
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent"
            >
              Applied AI Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-300 max-w-xl leading-relaxed"
            >
              Building intelligent AI systems that transform complex workflows into clear, efficient structures. 
              Specializing in <span className="text-primary-400 font-semibold">Large Language Models</span>, 
              <span className="text-primary-400 font-semibold"> Retrieval-Augmented Generation</span>, 
              <span className="text-primary-400 font-semibold"> AI Agents</span>, 
              <span className="text-primary-400 font-semibold"> Computer Vision</span>, and 
              <span className="text-primary-400 font-semibold"> Generative AI</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50 hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#"
                className="px-8 py-4 glass-effect hover:bg-white/10 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] hidden lg:block"
          >
            <canvas
              ref={canvasRef}
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
                <div className="absolute inset-4 border-2 border-primary-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute inset-8 border-2 border-primary-400/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute inset-12 border-2 border-primary-300/30 rounded-full animate-[spin_25s_linear_infinite]"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
