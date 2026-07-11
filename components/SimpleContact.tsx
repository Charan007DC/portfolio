'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Link as LinkIcon, Code, MapPin, FileText, Send } from 'lucide-react';
import { useState } from 'react';

export default function SimpleContact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dhakshacharan007@gmail.com',
      href: 'mailto:dhakshacharan007@gmail.com',
    },
    {
      icon: LinkIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/dhaksha-charan-r',
      href: 'https://www.linkedin.com/in/dhaksha-charan-r/',
    },
    {
      icon: Code,
      label: 'GitHub',
      value: 'github.com/Charan007DC',
      href: 'https://github.com/Charan007DC',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tiruvannamalai, India',
      href: null,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Let's discuss AI projects, collaborations, or opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
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
                    className="flex items-center gap-4 p-5 glass-hover rounded-xl group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                      <contact.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-text-secondary">{contact.label}</p>
                      <p className="text-text font-medium">{contact.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-5 glass rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <contact.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-text-secondary">{contact.label}</p>
                      <p className="text-text font-medium">{contact.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            <motion.a
              href="/resume.pdf"
              download
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center gap-2 p-5 rounded-xl bg-black border border-white text-white font-medium transition-all hover:bg-white hover:text-black group"
            >
              <FileText size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-surface/50 border border-white/5 text-text placeholder:text-text-secondary focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-surface/50 border border-white/5 text-text placeholder:text-text-secondary focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-surface/50 border border-white/5 text-text placeholder:text-text-secondary focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 rounded-lg bg-black border border-white text-white font-medium transition-all hover:bg-white hover:text-black flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
