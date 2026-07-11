'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const achievements = [
    {
      title: 'Runner-Up',
      event: 'CloudCouch Hackathon',
      description: 'Secured second place in competitive hackathon focusing on cloud-based AI solutions and innovative problem-solving.',
      icon: '🥈',
      highlight: true,
    },
    {
      title: 'Selected Participant',
      event: 'PwC Launchpad',
      description: 'Chosen for prestigious cloud engineering and AI program from competitive applicant pool.',
      icon: '⭐',
      highlight: true,
    },
    {
      title: 'Hackathon Participation',
      event: 'Multiple Events',
      description: 'Active participant in various hackathons, building innovative AI solutions and collaborating with teams.',
      icon: '💡',
      highlight: false,
    },
  ];

  return (
    <section id="achievements" className="relative py-20 lg:py-32 overflow-hidden">
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
              Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-effect p-8 rounded-xl transition-all duration-300 group hover:scale-105 ${
                achievement.highlight
                  ? 'hover:bg-primary-500/10 border-primary-500/30'
                  : 'hover:bg-white/10'
              }`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-5xl ${
                  achievement.highlight
                    ? 'bg-primary-500/20 group-hover:bg-primary-500/30'
                    : 'bg-dark-600/50 group-hover:bg-dark-500/50'
                } transition-colors`}>
                  {achievement.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-primary-400 font-semibold mb-4">{achievement.event}</p>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>

                {achievement.highlight && (
                  <div className="w-full pt-4 border-t border-primary-500/20">
                    <span className="px-4 py-2 bg-primary-500/10 text-primary-400 rounded-lg text-sm font-medium border border-primary-500/20">
                      Featured
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
