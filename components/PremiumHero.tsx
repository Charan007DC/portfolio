'use client';

import { motion } from 'framer-motion';
import { Code, ArrowRight, Sparkles, Activity, Database, Zap, Brain, Network } from 'lucide-react';

export default function PremiumHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const dashboardStats = [
    { label: 'LLM Status', value: 'Active', status: 'success', icon: Brain },
    { label: 'AI Agents', value: '3 Running', status: 'success', icon: Network },
    { label: 'RAG Pipeline', value: 'Operational', status: 'success', icon: Activity },
    { label: 'Vector DB', value: '99.9% Up', status: 'success', icon: Database },
    { label: 'Latency', value: '127ms', status: 'warning', icon: Zap },
    { label: 'Inference', value: '2.3k/hr', status: 'success', icon: Sparkles },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-glow/20 rounded-full filter blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-glow/20 rounded-full filter blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

      {/* Grid Background */}
      <div className="absolute inset-0 animated-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants as any}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants as any}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-glow/20 text-primary-glow text-sm font-medium">
                <Sparkles size={16} className="animate-pulse" />
                Available for AI Engineer Roles
              </div>
            </motion.div>

            <motion.div variants={itemVariants as any} className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Building Intelligent
                <span className="block text-gradient mt-2">AI Systems</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants as any}
              className="text-xl text-text-secondary max-w-xl leading-relaxed"
            >
              Powered by <span className="text-primary-glow font-semibold">LLMs</span>,{' '}
              <span className="text-primary-glow font-semibold">RAG</span>,{' '}
              <span className="text-primary-glow font-semibold">AI Agents</span>,{' '}
              <span className="text-primary-glow font-semibold">Computer Vision</span>, and{' '}
              <span className="text-primary-glow font-semibold">Generative AI</span>
            </motion.p>

            <motion.div variants={itemVariants as any} className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="group px-8 py-4 rounded-xl bg-accent hover:bg-accent/90 text-white font-medium transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent/50 flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 rounded-xl glass-hover font-medium text-text flex items-center gap-2"
              >
                Download Resume
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl glass-hover font-medium text-text flex items-center gap-2"
              >
                <Code size={20} />
                GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Right Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative glass rounded-2xl p-6 glow-effect">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-text">AI Systems Dashboard</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-text-secondary">All Systems Operational</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {dashboardStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="glass rounded-xl p-4 hover:bg-surface/60 transition-all group cursor-default"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className={`p-2 rounded-lg ${stat.status === 'success' ? 'bg-primary-glow/10' : 'bg-yellow-500/10'}`}>
                        <stat.icon size={18} className={stat.status === 'success' ? 'text-primary-glow' : 'text-yellow-500'} />
                      </div>
                      {stat.status === 'success' && (
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      )}
                    </div>
                    <p className="text-sm text-text-secondary mb-1">{stat.label}</p>
                    <p className="text-lg font-semibold text-text">{stat.value}</p>
                  </motion.div>
                ))}
              </div>

              {/* Animated Activity Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-6 p-4 glass rounded-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-text-secondary">Embedding Search Activity</span>
                  <span className="text-sm text-primary-glow font-medium">Live</span>
                </div>
                <div className="flex items-end gap-1 h-16">
                  {[40, 60, 45, 70, 55, 80, 65, 50, 75, 60, 85, 70].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 1.4 + i * 0.05, duration: 0.3 }}
                      className="flex-1 bg-gradient-to-t from-primary-glow to-secondary-glow rounded-t opacity-60 hover:opacity-100 transition-opacity"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-glow/20 rounded-full filter blur-2xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-glow/20 rounded-full filter blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
