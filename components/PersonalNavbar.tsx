'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Code, FileText } from 'lucide-react';

export default function PersonalNavbar() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(5, 8, 22, 0)', 'rgba(16, 22, 38, 0.8)']
  );
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certificates', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      style={{ 
        backgroundColor,
        backdropFilter: useTransform(backdropBlur, (v) => `blur(${v}px)`),
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <img 
              src="/images/logo.png" 
              alt="DC Logo" 
              className="h-12 w-auto"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const fallback = document.createElement('span');
                  fallback.className = 'text-2xl font-bold text-gradient';
                  fallback.textContent = 'DC';
                  parent.appendChild(fallback);
                }
              }}
            />
          </motion.a>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                  activeSection === item.href.slice(1)
                    ? 'text-white'
                    : 'text-text-secondary hover:text-text'
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-white/5 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Right Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <a
              href="https://github.com/Charan007DC"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg glass-hover text-sm font-medium text-text-secondary hover:text-text transition-colors"
            >
              <Code size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black border border-white text-white text-sm font-medium transition-all hover:bg-white hover:text-black"
            >
              <FileText size={18} />
              <span>Resume</span>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
