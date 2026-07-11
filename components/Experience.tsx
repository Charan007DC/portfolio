'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Cloud Engineering Participant',
      company: 'PwC Tekstac Launchpad',
      period: '2024',
      highlights: [
        'Generative AI & Prompt Engineering',
        'AI Agents & Autonomous Systems',
        'Modern Data Systems & Architecture',
        'API Integration & Development',
        'Cloud Concepts & Best Practices',
        'End-to-End AI Workflows',
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-400 to-dark-500"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-700 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 md:ml-16"
            >
              <div className="absolute left-[-3.7rem] top-6 w-8 h-8 bg-primary-500 rounded-full border-4 border-dark-400 hidden md:block"></div>

              <div className="glass-effect p-8 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-primary-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="px-4 py-2 bg-primary-500/10 text-primary-400 rounded-lg text-sm font-medium border border-primary-500/20">
                    {exp.period}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  {exp.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <span className="text-primary-400 mr-2">▹</span>
                      {highlight}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
