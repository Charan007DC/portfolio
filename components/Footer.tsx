'use client';

import { motion } from 'framer-motion';
import { Code, Link as LinkIcon, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Code, href: 'https://github.com/Charan007DC', label: 'GitHub' },
    { icon: LinkIcon, href: 'https://www.linkedin.com/in/dhaksha-charan-r/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dhakshacharan007@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-16 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-2">
              R Dhaksha Charan
            </h3>
            <p className="text-text-secondary text-lg mb-3">Applied AI Engineer</p>
            <p className="text-text-secondary text-sm max-w-md">
              Building practical AI solutions using LLMs, AI Agents, Computer Vision and Machine Learning.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-12 h-12 rounded-lg glass-hover flex items-center justify-center group"
              >
                <link.icon size={20} className="text-text-secondary group-hover:text-white transition-colors" />
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-text-secondary text-sm space-y-1"
          >
            <p>© {new Date().getFullYear()} R Dhaksha Charan. All rights reserved.</p>
            <p className="text-xs">
              Built with Next.js • TypeScript • Tailwind CSS • Framer Motion
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
