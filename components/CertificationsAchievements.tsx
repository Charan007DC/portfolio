'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Star, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CertificationsAchievements() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [counts, setCounts] = useState({ projects: 0, hackathons: 0, certs: 0, repos: 0 });

  const certifications = [
    { title: 'Prompt Engineering', issuer: 'PwC', year: '2024' },
    { title: 'AI Agents', issuer: 'PwC', year: '2024' },
    { title: 'Modern Data Systems', issuer: 'PwC', year: '2024' },
    { title: 'Programming in Java', issuer: 'NPTEL', year: '2024' },
    { title: 'Python for Data Science', issuer: 'NPTEL', year: '2024' },
  ];

  const achievements = [
    { label: 'Runner-Up', value: 'CloudCouch Hackathon', icon: Trophy },
    { label: 'Selected', value: 'PwC Launchpad', icon: Star },
    { label: 'Participation', value: 'Multiple Hackathons', icon: TrendingUp },
  ];

  useEffect(() => {
    if (!inView) return;

    const targets = { projects: 10, hackathons: 5, certs: 5, repos: 15 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const increment = {
      projects: targets.projects / steps,
      hackathons: targets.hackathons / steps,
      certs: targets.certs / steps,
      repos: targets.repos / steps,
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts({
        projects: Math.min(Math.floor(increment.projects * step), targets.projects),
        hackathons: Math.min(Math.floor(increment.hackathons * step), targets.hackathons),
        certs: Math.min(Math.floor(increment.certs * step), targets.certs),
        repos: Math.min(Math.floor(increment.repos * step), targets.repos),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [inView]);

  return (
    <section id="achievements" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
        {/* Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gradient">Certifications</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-hover rounded-2xl p-6 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-glow/10 flex items-center justify-center group-hover:bg-primary-glow/20 transition-colors">
                    <Award size={24} className="text-primary-glow" />
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-accent/10 text-accent text-sm">
                    {cert.year}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-text mb-2">{cert.title}</h3>
                <p className="text-text-secondary">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gradient">Achievements</span>
            </h2>
          </motion.div>

          {/* Achievement Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'AI Projects', value: counts.projects, suffix: '+' },
              { label: 'Hackathons', value: counts.hackathons, suffix: '+' },
              { label: 'Certifications', value: counts.certs, suffix: '' },
              { label: 'GitHub Repos', value: counts.repos, suffix: '+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-hover rounded-2xl p-8 text-center"
              >
                <div className="text-5xl font-bold text-gradient mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-text-secondary">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="glass-hover rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-glow/20 to-secondary-glow/20 flex items-center justify-center mx-auto mb-4">
                  <achievement.icon size={32} className="text-primary-glow" />
                </div>
                <h3 className="text-xl font-bold text-text mb-2">{achievement.label}</h3>
                <p className="text-text-secondary">{achievement.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
