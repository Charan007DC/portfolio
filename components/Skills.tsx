'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'SQL', 'Java'],
      icon: '💻',
    },
    {
      category: 'AI & Machine Learning',
      skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Generative AI'],
      icon: '🤖',
    },
    {
      category: 'LLM Engineering',
      skills: ['LangChain', 'LangGraph', 'RAG', 'Prompt Engineering', 'AI Agents', 'Embeddings', 'Vector Search'],
      icon: '🧠',
    },
    {
      category: 'Backend Development',
      skills: ['FastAPI', 'REST APIs', 'Chainlit'],
      icon: '⚙️',
    },
    {
      category: 'Development Tools',
      skills: ['Git', 'GitHub'],
      icon: '🛠️',
    },
  ];

  return (
    <section id="skills" className="relative py-20 lg:py-32 overflow-hidden">
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
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + skillIndex * 0.1 }}
                    className="flex items-center justify-between p-3 bg-dark-600/50 rounded-lg hover:bg-dark-500/50 transition-all duration-300"
                  >
                    <span className="text-gray-300">{skill}</span>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 rounded-full bg-primary-500"
                        ></div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
