'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

export default function ExperienceSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const experience = {
    company: 'PwC Tekstac Launchpad',
    role: 'Cloud Engineering Participant',
    period: 'February 2026 – Present',
    year: '2026',
    highlights: [
      'Prompt Engineering & LLM Optimization',
      'AI Agents & Autonomous Systems',
      'Modern Data Systems Architecture',
      'Backend API Development',
      'Cloud Infrastructure Concepts',
      'Generative AI Applications',
      'End-to-End Deployment Workflows',
    ],
  };

  return (
    <section id="experience" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 lg:p-12 hover:bg-surface/60 transition-all"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Company Icon */}
            <div className="lg:w-1/4">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                <Briefcase size={40} className="text-white" />
              </div>
            </div>

            {/* Right: Details */}
            <div className="lg:w-3/4 space-y-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-text mb-2">
                  {experience.role}
                </h3>
                <p className="text-xl text-white font-semibold mb-3">
                  {experience.company}
                </p>
                <div className="flex items-center gap-2 text-text-secondary">
                  <Calendar size={16} />
                  <span>{experience.period}</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {experience.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg glass-hover"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span className="text-text-secondary">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
