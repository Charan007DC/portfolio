'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    {
      title: 'PwC Prompt Engineering',
      issuer: 'PwC',
      date: '2024',
      skills: ['Prompt Engineering', 'LLMs', 'AI'],
    },
    {
      title: 'AI Agents',
      issuer: 'PwC',
      date: '2024',
      skills: ['AI Agents', 'Autonomous Systems', 'LangChain'],
    },
    {
      title: 'Modern Data Systems',
      issuer: 'PwC',
      date: '2024',
      skills: ['Data Architecture', 'Cloud', 'APIs'],
    },
    {
      title: 'Programming in Java',
      issuer: 'NPTEL',
      date: '2024',
      skills: ['Java', 'OOP', 'Data Structures'],
    },
    {
      title: 'Python for Data Science',
      issuer: 'NPTEL',
      date: '2024',
      skills: ['Python', 'Data Analysis', 'ML'],
    },
  ];

  return (
    <section id="certifications" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-500 to-dark-400"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                  <span className="text-2xl">🏆</span>
                </div>
                <span className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-lg text-xs border border-primary-500/20">
                  {cert.date}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-primary-400 font-semibold mb-4">{cert.issuer}</p>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-dark-600/50 text-gray-300 rounded-lg text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
