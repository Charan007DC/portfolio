'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const timeline = [
    '2023 • Started AI Engineering',
    'Machine Learning Foundations',
    'Computer Vision Projects',
    'Generative AI Exploration',
    'Large Language Models',
    'Retrieval-Augmented Generation',
    'AI Agents & Automation',
    'PwC Launchpad Selection',
    '2024 • Applied AI Engineer',
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Engineering AI systems that solve real-world problems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 hover:bg-surface/60 transition-all">
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                I engineer production-ready AI applications that transform complex challenges 
                into scalable solutions. My expertise spans the entire AI development lifecycle—from 
                designing sophisticated RAG pipelines to deploying intelligent agent systems.
              </p>
              
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Working with cutting-edge technologies like{' '}
                <span className="text-primary-glow font-semibold">LangChain</span>,{' '}
                <span className="text-primary-glow font-semibold">LangGraph</span>, and{' '}
                <span className="text-primary-glow font-semibold">FastAPI</span>, I build 
                AI systems that seamlessly integrate Large Language Models, vector databases, 
                and real-time inference engines.
              </p>

              <p className="text-lg text-text-secondary leading-relaxed">
                From computer vision models detecting real-world hazards to conversational AI 
                assistants processing legal documents, I focus on creating AI that delivers 
                measurable business value while maintaining technical excellence.
              </p>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-text mb-8">Career Journey</h3>
              
              <div className="relative space-y-4">
                {/* Timeline line */}
                <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary-glow via-secondary-glow to-accent" />
                
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="relative flex items-center gap-4 group"
                  >
                    <div className="relative z-10 w-6 h-6 rounded-full bg-accent border-4 border-background group-hover:scale-125 transition-transform" />
                    <div className="flex-1 glass-hover rounded-lg px-4 py-3">
                      <p className={`${
                        item.includes('202') 
                          ? 'text-primary-glow font-bold text-lg' 
                          : 'text-text-secondary'
                      }`}>
                        {item}
                      </p>
                    </div>
                    {item.includes('202') && (
                      <ArrowRight size={20} className="text-primary-glow animate-pulse" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
