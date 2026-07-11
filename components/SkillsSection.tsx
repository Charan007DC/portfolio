'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Server, GitBranch } from 'lucide-react';

export default function SkillsSection() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      skills: ['Python', 'SQL', 'Java'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Generative AI'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Brain,
      title: 'LLM Engineering',
      skills: ['Prompt Engineering', 'LangChain', 'LangGraph', 'RAG', 'AI Agents', 'Embeddings', 'Vector Search'],
      color: 'from-primary-glow to-secondary-glow',
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['FastAPI', 'REST APIs', 'Chainlit'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: GitBranch,
      title: 'Deployment',
      skills: ['Git', 'Docker', 'Cloud'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass-hover rounded-2xl p-8 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} opacity-20 flex items-center justify-center mb-6 group-hover:opacity-30 transition-opacity`}>
                <category.icon size={28} className="text-text" />
              </div>
              
              <h3 className="text-xl font-bold text-text mb-6">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-2 rounded-lg glass text-text-secondary text-sm hover:text-white hover:bg-white/10 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
