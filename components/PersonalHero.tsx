'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Code } from 'lucide-react';

export default function PersonalHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute inset-0 animated-grid opacity-20" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-[120px] animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-white/3 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Personal Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-text-secondary text-lg mb-3">Hi, I'm</p>
              <h1 className="text-6xl lg:text-7xl font-bold mb-4">
                <span className="text-gradient">R Dhaksha Charan</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6">
                Applied AI Engineer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-text-secondary leading-relaxed max-w-2xl"
            >
              I build intelligent AI applications using Large Language Models, Retrieval-Augmented Generation (RAG), AI Agents, Computer Vision, and Machine Learning to solve real-world problems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-text-secondary leading-relaxed max-w-2xl"
            >
              Currently pursuing B.Tech in Artificial Intelligence & Data Science while building production-ready AI applications and exploring modern AI systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#projects"
                className="group px-8 py-4 rounded-xl bg-black border border-white text-white font-medium transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 rounded-xl glass-hover font-medium text-text flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="https://github.com/Charan007DC"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl glass-hover font-medium text-text flex items-center gap-2"
              >
                <Code size={18} />
                GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center h-[600px]"
          >
            {/* Background glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-gradient-to-r from-white/10 to-white/5 rounded-full filter blur-3xl animate-pulse-glow" />
            </div>

            {/* Orbiting rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[400px] h-[400px] border border-white/10 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[450px] h-[450px] border border-white/5 rounded-full"
            />

            {/* Profile Image */}
            <div className="relative z-10">
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-white/10">
                <img
                  src="/images/profile.png"
                  alt="R Dhaksha Charan"
                  className="w-full h-full object-cover grayscale"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="320" height="320"%3E%3Crect fill="%23141B2D" width="320" height="320"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="48" fill="%2360A5FA"%3EDC%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              
              {/* Floating particles around image */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.3,
                  }}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    top: `${15 + i * 12}%`,
                    left: i % 2 === 0 ? '10%' : '90%',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
