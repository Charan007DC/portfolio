'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp } from 'lucide-react';

export default function PersonalAbout() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const timeline = [
    '2023 • Started AI & Data Science',
    'Machine Learning',
    'Computer Vision',
    'Generative AI',
    'Large Language Models',
    'Retrieval-Augmented Generation',
    'AI Agents',
    'PwC Launchpad',
    '2024 • Applied AI Engineer',
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient">About Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Who I Am */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-text mb-4">Who I Am</h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-4">
                I'm an Applied AI Engineer focused on building practical, scalable AI solutions. My work spans from developing LLM-powered applications to creating intelligent systems that solve real-world challenges.
              </p>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                I specialize in implementing RAG systems, building autonomous AI agents, and creating computer vision solutions. I'm passionate about exploring the latest advancements in AI while ensuring my projects deliver measurable impact.
              </p>
            </div>
          </motion.div>

          {/* Right: Career Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp size={24} className="text-white" />
                <h3 className="text-2xl font-bold text-text">Career Journey</h3>
              </div>
              
              <div className="relative space-y-4">
                {/* Timeline line */}
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-white/40 via-white/20 to-white/10" />
                
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.08 }}
                    className="relative flex items-start gap-4 group"
                  >
                    <div className={`relative z-10 mt-1 w-6 h-6 rounded-full border-4 border-background transition-all duration-300 ${
                      item.includes('202') 
                        ? 'bg-white scale-125 shadow-lg shadow-white/20' 
                        : 'bg-white/50 group-hover:bg-white group-hover:scale-110'
                    }`} />
                    
                    <div className={`flex-1 py-2 ${
                      item.includes('202') ? '' : 'opacity-80 group-hover:opacity-100'
                    } transition-opacity`}>
                      <p className={`${
                        item.includes('202') 
                          ? 'text-white font-bold text-xl' 
                          : 'text-text-secondary font-medium'
                      }`}>
                        {item}
                      </p>
                    </div>
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
