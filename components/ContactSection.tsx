'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Mail, Link, Code, MapPin, FileText, Send } from 'lucide-react';

export default function ContactSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [terminalText, setTerminalText] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const fullText = 'charan@portfolio$ hire --role "AI Engineer"\n> Checking availability...\n> Status: Available ✓\n> Skills: LLMs | RAG | AI Agents | CV\n> Ready to build intelligent systems';

  useEffect(() => {
    if (!inView) return;
    
    let index = 0;
    const timer = setInterval(() => {
      setTerminalText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 30);

    return () => clearInterval(timer);
  }, [inView]);

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: Link,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      href: 'https://linkedin.com/in/yourprofile',
    },
    {
      icon: Code,
      label: 'GitHub',
      value: 'github.com/yourusername',
      href: 'https://github.com/yourusername',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Your City, Country',
      href: null,
    },
    {
      icon: FileText,
      label: 'Resume',
      value: 'Download PDF',
      href: '/resume.pdf',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 animated-grid opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Let's Build Together</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Open to AI Engineering opportunities and collaborations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      download={contact.label === 'Resume'}
                      className="flex items-center gap-4 p-4 glass-hover rounded-xl group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary-glow/10 flex items-center justify-center group-hover:bg-primary-glow/20 transition-colors">
                        <contact.icon size={20} className="text-primary-glow" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-text-secondary">{contact.label}</p>
                        <p className="text-text font-medium">{contact.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 glass rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-primary-glow/10 flex items-center justify-center">
                        <contact.icon size={20} className="text-primary-glow" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-text-secondary">{contact.label}</p>
                        <p className="text-text font-medium">{contact.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Terminal Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-surface/50 px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-sm text-text-secondary font-mono">contact.sh</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                <pre className="text-primary-glow whitespace-pre-wrap">
                  {terminalText}
                  <span className="animate-pulse">_</span>
                </pre>
              </div>
            </div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              onSubmit={handleSubmit}
              className="mt-6 glass rounded-2xl p-6 space-y-4"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-surface/50 border border-white/5 text-text placeholder:text-text-secondary focus:outline-none focus:border-primary-glow/50 transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-surface/50 border border-white/5 text-text placeholder:text-text-secondary focus:outline-none focus:border-primary-glow/50 transition-colors"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-surface/50 border border-white/5 text-text placeholder:text-text-secondary focus:outline-none focus:border-primary-glow/50 transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-white font-medium transition-all hover:shadow-lg hover:shadow-accent/50 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
