'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Enterprise Legal AI Assistant',
      description: 'Production-grade conversational AI system for legal document analysis and query resolution. Implements advanced RAG architecture with multi-document retrieval, context-aware responses, and conversation memory. Built with LangChain for orchestration and Chainlit for interactive UI.',
      technologies: ['Python', 'LangChain', 'Chainlit', 'RAG', 'Prompt Engineering', 'Vector DB'],
      architecture: 'Multi-stage RAG pipeline with document preprocessing, semantic chunking, embedding generation, and context-aware retrieval with reranking',
      challenges: 'Handling complex legal terminology, maintaining context across long conversations, ensuring accurate citation of source documents',
      solution: 'Implemented hybrid search combining semantic and keyword-based retrieval, custom prompt templates for legal domain, and citation tracking system',
      github: '#',
      demo: '#',
      image: '/projects/legal-ai.jpg',
    },
    {
      title: 'HavenPath',
      description: 'Real-time road hazard detection system using computer vision and deep learning. Processes video streams to identify and classify road hazards including potholes, debris, and obstacles. Deployed as edge AI solution for immediate threat assessment.',
      technologies: ['YOLO', 'Computer Vision', 'Python', 'Real-Time Detection', 'OpenCV', 'TensorFlow'],
      architecture: 'YOLOv8-based object detection pipeline with custom-trained model for hazard classification, real-time video processing, and alert generation system',
      challenges: 'Achieving real-time performance on edge devices, handling varying lighting conditions, reducing false positives',
      solution: 'Model optimization through quantization and pruning, augmented training data with various lighting scenarios, ensemble prediction with confidence thresholding',
      github: '#',
      demo: '#',
      image: '/projects/havenpath.jpg',
    },
    {
      title: 'Formula 1 Race Intelligence Agent',
      description: 'ML-powered predictive analytics system for F1 race outcomes. Analyzes historical race data, weather conditions, track characteristics, and driver performance to generate race predictions and strategic insights.',
      technologies: ['Machine Learning', 'Python', 'Predictive Analytics', 'Feature Engineering', 'Scikit-learn', 'Pandas'],
      architecture: 'Ensemble learning pipeline combining gradient boosting and random forests, automated feature engineering, and time-series analysis for performance trends',
      challenges: 'Limited data availability, high variability in race conditions, complex feature interactions',
      solution: 'Advanced feature engineering including rolling averages and interaction terms, external data augmentation from weather APIs, cross-validation with temporal splits',
      github: '#',
      demo: '#',
      image: '/projects/f1-agent.jpg',
    },
  ];

  return (
    <section id="projects" className="relative py-20 lg:py-32 overflow-hidden">
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 bg-gradient-to-br from-primary-500/20 to-primary-700/20 p-8 flex items-center justify-center">
                  <div className="w-full h-64 bg-dark-600/50 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 font-mono text-sm">{project.image}</span>
                  </div>
                </div>

                <div className="lg:col-span-3 p-8 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-primary-400 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-500/10 text-primary-300 rounded-lg text-sm border border-primary-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-gray-400">Architecture:</span>
                      <p className="text-gray-300 mt-1">{project.architecture}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-400">Challenges:</span>
                      <p className="text-gray-300 mt-1">{project.challenges}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-400">Solution:</span>
                      <p className="text-gray-300 mt-1">{project.solution}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github}
                      className="px-6 py-3 bg-dark-600 hover:bg-dark-500 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                      <span>GitHub</span>
                      <span>→</span>
                    </a>
                    <a
                      href={project.demo}
                      className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/50 flex items-center gap-2"
                    >
                      <span>Live Demo</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
