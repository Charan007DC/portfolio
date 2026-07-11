'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I engineer production-ready AI applications that solve real-world problems at scale. 
              My expertise lies in building end-to-end AI systems that seamlessly integrate 
              <span className="text-primary-400 font-semibold"> Large Language Models</span>, 
              <span className="text-primary-400 font-semibold"> advanced retrieval mechanisms</span>, and 
              <span className="text-primary-400 font-semibold"> intelligent agent architectures</span>.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              From designing scalable backend infrastructure with FastAPI to implementing sophisticated 
              RAG pipelines using LangChain and LangGraph, I focus on creating AI solutions that are 
              both technically robust and practically valuable. My work spans computer vision systems 
              for real-time detection, conversational AI agents for enterprise applications, and 
              machine learning models for predictive analytics.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I approach AI engineering with a systems thinking mindset—considering not just the model, 
              but the entire architecture, data pipeline, deployment strategy, and user experience. 
              Every project is an opportunity to push the boundaries of what's possible with 
              generative AI and deliver tangible business value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: 'LLM Applications', value: '3+' },
              { label: 'AI Projects', value: '10+' },
              { label: 'Technologies', value: '15+' },
              { label: 'Certifications', value: '5+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="glass-effect p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
