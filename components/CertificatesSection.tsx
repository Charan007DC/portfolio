'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

export default function CertificatesSection() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const certificates = [
    {
      name: 'Python for Data Science',
      issuer: 'NPTEL',
      year: '2025',
    },
    {
      name: 'Programming in Java',
      issuer: 'NPTEL',
      year: '2026',
    },
    {
      name: 'Cloud Engineering Micro Certification',
      issuer: 'PwC Tekstac',
      year: '2026',
    },
    {
      name: 'Programming Fundamentals – Python Micro Certification',
      issuer: 'PwC Tekstac',
      year: '2026',
    },
    {
      name: 'Modern Data Systems Micro Certification',
      issuer: 'PwC Tekstac',
      year: '2026',
    },
    {
      name: 'GenAI – Prompt Engineering and Intro to AI Agent Micro Certification',
      issuer: 'PwC Tekstac',
      year: '2026',
    },
  ];

  return (
    <section id="certificates" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Certificates</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="glass-hover rounded-2xl p-6 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                  <Award size={24} className="text-white" />
                </div>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-white text-sm font-medium">
                  {cert.year}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-text mb-2 group-hover:text-white transition-colors">
                {cert.name}
              </h3>
              <p className="text-text-secondary text-sm">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>

        {/* View All Certificates Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center"
        >
          <a
            href="https://drive.google.com/drive/folders/1rQoo2FLqHN_KLoctqZAyDRRx8itQ70rN"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-5 rounded-xl bg-black border border-white text-white text-lg font-medium transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 flex items-center gap-3"
          >
            View All Certificates
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
