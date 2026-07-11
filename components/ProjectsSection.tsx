'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Code, ExternalLink, X, Code2, Layers, Lightbulb } from 'lucide-react';

export default function ProjectsSection() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Enterprise Legal AI Assistant',
      subtitle: 'Conversational AI for Legal Document Analysis',
      tech: ['Python', 'LangChain', 'Chainlit', 'RAG', 'Vector DB', 'GPT-4'],
      description: 'Production-grade conversational AI system for legal document analysis and query resolution',
      problem: 'Law firms needed faster document review and accurate citation tracking across thousands of legal documents',
      solution: 'Built a multi-stage RAG pipeline with semantic chunking, hybrid search, and citation tracking',
      architecture: 'Multi-stage RAG pipeline → Document preprocessing → Semantic chunking → Embedding generation → Vector DB (Pinecone) → Hybrid search with reranking → GPT-4 with custom prompts → Citation tracking',
      challenges: 'Complex legal terminology, maintaining context across long conversations, ensuring accurate source citations',
      improvements: 'Implemented hybrid search combining semantic and keyword-based retrieval, custom prompt templates for legal domain',
      github: 'https://github.com/SiddarthS1205/automated_legal_document',
      demo: '',
      image: '/images/legal-ai.png',
      status: 'Completed',
    },
    {
      title: 'Formula 1 Race Intelligence Agent',
      subtitle: 'ML-Powered Race Prediction System',
      tech: ['Machine Learning', 'Python', 'Predictive Analytics', 'Feature Engineering', 'Scikit-learn'],
      description: 'ML-powered predictive analytics system for F1 race outcomes and strategic insights',
      problem: 'Complex race dynamics make outcome predictions difficult for analysts and enthusiasts',
      solution: 'Ensemble learning pipeline with advanced feature engineering for accurate race predictions',
      architecture: 'Data Collection → Feature Engineering (rolling averages, interaction terms) → Ensemble Model (XGBoost + Random Forest) → Time-series Analysis → Prediction API',
      challenges: 'Limited data availability, high variability in race conditions, complex feature interactions',
      improvements: 'External data augmentation from weather APIs, cross-validation with temporal splits',
      github: 'https://github.com/Charan007DC/F1-Real-Time-Strategy-Race-Intelligence-MCP-Agent',
      demo: '',
      image: '/images/f1.png',
      status: 'Completed',
    },
    {
      title: 'HavenPath',
      subtitle: 'AI-Powered Road Hazard Detection',
      tech: ['YOLO', 'Computer Vision', 'Python', 'Real-Time Detection', 'OpenCV'],
      description: 'Real-time road hazard detection system using computer vision and deep learning',
      problem: 'Road hazards cause accidents. Real-time detection needed for driver safety systems',
      solution: 'Deployed YOLOv8-based edge AI solution for immediate threat assessment and alerting',
      architecture: 'Video Input → YOLOv8 Detection → Custom Classification Model → Confidence Filtering → Alert System → Real-time Dashboard',
      challenges: 'Real-time performance on edge devices, varying lighting conditions, reducing false positives',
      improvements: 'Model optimization through quantization, augmented training data with various lighting scenarios',
      github: '',
      demo: '',
      image: '/images/havenpath.png',
      status: 'Ongoing',
    },
  ];

  return (
    <>
      <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Production-ready AI systems solving real-world problems
            </p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="glass-hover rounded-2xl p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left: Project visual */}
                    <div className="lg:w-2/5">
                      <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group-hover:scale-105 transition-transform shadow-lg shadow-white/5">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="hidden w-full h-full bg-gradient-to-br from-white/10 to-white/5 items-center justify-center absolute inset-0">
                          <Code2 size={48} className="text-white opacity-50" />
                        </div>
                      </div>
                    </div>

                    {/* Right: Project details */}
                    <div className="lg:w-3/5 space-y-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl lg:text-3xl font-bold text-text group-hover:text-white transition-colors">
                            {project.title}
                          </h3>
                          {project.status === 'Ongoing' && (
                            <span className="px-3 py-1 rounded-lg bg-white/10 text-white text-sm font-medium border border-white/20">
                              Ongoing Development
                            </span>
                          )}
                        </div>
                        <p className="text-text-secondary mb-4">{project.subtitle}</p>
                        <p className="text-text-secondary leading-relaxed">{project.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-white/10 text-white text-sm border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 pt-4">
                        <button
                          onClick={() => setSelectedProject(index)}
                          className="px-6 py-3 rounded-xl bg-black border border-white text-white font-medium transition-all hover:bg-white hover:text-black"
                        >
                          View Case Study
                        </button>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl glass-hover font-medium text-text flex items-center gap-2"
                          >
                            <Code size={18} />
                            GitHub
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl glass-hover font-medium text-text flex items-center gap-2"
                          >
                            <ExternalLink size={18} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex items-center justify-center p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-2xl p-8 lg:p-12 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-bold text-text mb-2">
                  {projects[selectedProject].title}
                </h3>
                <p className="text-text-secondary">{projects[selectedProject].subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg glass-hover"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb size={20} className="text-white" />
                  <h4 className="text-xl font-bold text-text">Problem</h4>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Code2 size={20} className="text-white" />
                  <h4 className="text-xl font-bold text-text">Solution</h4>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {projects[selectedProject].solution}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Layers size={20} className="text-white" />
                  <h4 className="text-xl font-bold text-text">Architecture</h4>
                </div>
                <p className="text-text-secondary leading-relaxed font-mono text-sm bg-surface/50 p-4 rounded-lg">
                  {projects[selectedProject].architecture}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-text mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-text mb-3">Challenges & Solutions</h4>
                <div className="space-y-3">
                  <div className="glass rounded-lg p-4">
                    <p className="text-sm text-text-secondary mb-2">Challenges:</p>
                    <p className="text-text-secondary">{projects[selectedProject].challenges}</p>
                  </div>
                  <div className="glass rounded-lg p-4">
                    <p className="text-sm text-text-secondary mb-2">Improvements:</p>
                    <p className="text-text-secondary">{projects[selectedProject].improvements}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
