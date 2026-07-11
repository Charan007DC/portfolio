'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const contactInfo = [
    { label: 'Email', value: 'your.email@example.com', icon: '📧', link: 'mailto:your.email@example.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', icon: '💼', link: 'https://linkedin.com/in/yourprofile' },
    { label: 'GitHub', value: 'github.com/yourusername', icon: '💻', link: 'https://github.com/yourusername' },
    { label: 'Location', value: 'Your City, Country', icon: '📍', link: null },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-500 to-dark-400"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Looking to collaborate on AI projects or discuss opportunities? Let's connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center text-2xl">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-primary-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="block w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50 text-center"
            >
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-600 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-600 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-600 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
