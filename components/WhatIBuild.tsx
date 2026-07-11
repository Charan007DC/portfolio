'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Database, Network, Eye, Cpu, Server } from 'lucide-react';

export default function WhatIBuild() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const builds = [
    {
      icon: Brain,
      title: 'LLM Applications',
      description: 'Building AI assistants and enterprise LLM solutions.',
    },
    {
      icon: Database,
      title: 'Retrieval-Augmented Generation',
      description: 'Knowledge-aware AI using vector search.',
    },
    {
      icon: Network,
      title: 'AI Agents',
      description: 'Autonomous workflows and intelligent automation.',
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Real-time object detection and image intelligence.',
    },
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'Predictive analytics and intelligent decision systems.',
    },
    {
      icon: Server,
      title: 'Backend AI APIs',
      description: 'FastAPI-based AI services and scalable deployment.',
    },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">What I Build</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {builds.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-hover rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/10 transition-all duration-300">
                  <item.icon size={28} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-text mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/3 transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
