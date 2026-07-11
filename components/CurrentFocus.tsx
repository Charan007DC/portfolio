'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Network, Database, Eye, Server, Cpu } from 'lucide-react';

export default function CurrentFocus() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const focus = [
    {
      icon: Brain,
      title: 'LLM Applications',
      description: 'Building production-ready systems with GPT-4, Claude, and open-source models',
    },
    {
      icon: Network,
      title: 'AI Agents',
      description: 'Autonomous systems with LangGraph, tool calling, and multi-agent orchestration',
    },
    {
      icon: Database,
      title: 'RAG Systems',
      description: 'Advanced retrieval pipelines with semantic search and context optimization',
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Real-time detection and classification with YOLO and custom models',
    },
    {
      icon: Server,
      title: 'Backend APIs',
      description: 'Scalable FastAPI services with async processing and WebSocket support',
    },
    {
      icon: Cpu,
      title: 'Production AI',
      description: 'End-to-end ML pipelines, monitoring, and deployment infrastructure',
    },
  ];

  return (
    <section id="focus" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Currently Building</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focus.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-hover rounded-2xl p-8 h-full hover:shadow-2xl hover:shadow-primary-glow/10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-glow/20 to-secondary-glow/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={28} className="text-primary-glow" />
                </div>
                
                <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary-glow transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
