'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Search, Database, GitMerge, Brain, ArrowDown, Zap } from 'lucide-react';

export default function AIArchitecture() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const nodes = [
    { icon: User, label: 'User Query', color: 'text-blue-400' },
    { icon: Search, label: 'Retriever', color: 'text-cyan-400' },
    { icon: Zap, label: 'Embedding Model', color: 'text-purple-400' },
    { icon: Database, label: 'Vector Database', color: 'text-pink-400' },
    { icon: GitMerge, label: 'Context Builder', color: 'text-orange-400' },
    { icon: Brain, label: 'LLM', color: 'text-green-400' },
    { icon: User, label: 'Response', color: 'text-primary-glow' },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 animated-grid opacity-10" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-glow/10 rounded-full filter blur-[100px]" />
      
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">RAG Architecture</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            End-to-end retrieval-augmented generation pipeline
          </p>
        </motion.div>

        <div className="relative">
          {/* Architecture Flow */}
          <div className="flex flex-col items-center gap-4">
            {nodes.map((node, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="w-full max-w-md"
              >
                <div className="glass-hover rounded-2xl p-6 relative overflow-hidden group">
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-glow/5 to-secondary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-${node.color}/20 to-${node.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <node.icon size={28} className={node.color} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-text mb-1">{node.label}</h3>
                      <div className="h-2 bg-surface/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: '100%' } : {}}
                          transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
                          className="h-full bg-gradient-to-r from-primary-glow to-secondary-glow"
                        />
                      </div>
                    </div>

                    {/* Data packet animation */}
                    <motion.div
                      animate={{
                        opacity: [0, 1, 1, 0],
                        y: [0, 0, 10, 10],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className="absolute right-6 top-1/2 -translate-y-1/2"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary-glow animate-pulse" />
                    </motion.div>
                  </div>
                </div>

                {/* Arrow connector */}
                {index < nodes.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    className="flex justify-center py-2"
                  >
                    <ArrowDown size={24} className="text-primary-glow/50 animate-pulse" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Flowing data animation */}
          <motion.div
            animate={{
              y: ['0%', '100%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary-glow/50 to-transparent -z-10"
          />
        </div>
      </div>
    </section>
  );
}
