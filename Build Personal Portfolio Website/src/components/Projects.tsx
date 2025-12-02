'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Fal-AI-Slack-Integration',
    description: 'Comprehensive AI content generation platform integrating 8+ fal.ai services with 26+ AI models for images, videos, audio, and 3D content generation.',
    period: 'June 2025 – August 2025',
    location: 'St. Louis, MO',
    highlights: [
      'Multi-service architecture with Redis session management handling 1000+ concurrent sessions',
      'Integrated Google Drive OAuth for automatic asset storage and Google Gemini API for prompt enhancement',
      'Production-ready deployment with PM2 process management, JWT authentication, and comprehensive security',
    ],
    tech: ['JavaScript', 'Node.js', 'Slack API', 'AI/ML', 'Redis', 'Google Drive', 'PM2'],
    size: 'large',
  },
  {
    title: 'Sales Forecast Dashboard',
    description: 'AI-Powered Time-Series Forecasting Tool with production-ready ML pipeline processing 50,000+ data points with 85%+ prediction accuracy.',
    period: 'April 2025 - May 2025',
    location: 'Tempe, AZ',
    highlights: [
      'Built scalable time-series forecasting system with real-time data streams',
      'Modular component architecture with TypeScript ensuring type safety across 100+ components',
      '1M+ data points handling with sub-second response times',
    ],
    tech: ['Next.js', 'React', 'Google Gemini AI', 'TypeScript', 'Chart.js'],
    size: 'medium',
  },
  {
    title: 'Customer Churn Prediction Dashboard',
    description: 'ML-Powered Predictive Analytics Platform achieving 92% accuracy on 100K+ customer records with advanced feature engineering.',
    period: 'March 2025 - April 2025',
    location: 'Tempe, AZ',
    highlights: [
      'Engineered machine learning models (Random Forest, XGBoost) with 92% accuracy',
      'Built scalable data preprocessing pipeline processing 1M+ data points',
      'Interactive dashboard with Plotly handling 10K+ concurrent users with 99.5% uptime',
    ],
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Plotly', 'Random Forest'],
    size: 'medium',
  },
  {
    title: 'Smart Email Assistant',
    description: 'AI-Powered Email Automation Platform using AI/ML for intelligent email classification, automated response generation, and workflow optimization.',
    period: 'March 2025 - April 2025',
    location: 'Tempe, AZ',
    highlights: [
      'Implemented NLP for email content analysis and automated response generation',
      'Integrated multiple email APIs for seamless management',
      'Real-time monitoring and performance analytics dashboard',
    ],
    tech: ['Python', 'AI/ML', 'NLP', 'Email APIs'],
    size: 'small',
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="max-w-7xl mx-auto px-4" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-5xl md:text-6xl mb-4">Featured Projects</h2>
        <p className="text-xl text-zinc-400">
          Building scalable AI systems and full-stack applications
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const gridClass = project.size === 'large' 
            ? 'md:col-span-2 lg:col-span-2' 
            : project.size === 'medium'
            ? 'md:col-span-1 lg:col-span-1'
            : 'md:col-span-1 lg:col-span-1';

          return (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
              gridClass={gridClass}
            />
          );
        })}
      </div>
    </div>
  );
}

function ProjectCard({ 
  project, 
  index, 
  isInView, 
  gridClass 
}: { 
  project: typeof projects[0]; 
  index: number; 
  isInView: boolean; 
  gridClass: string; 
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={gridClass}
    >
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        className="relative h-full glass rounded-2xl p-6 border border-zinc-800/50 hover:border-purple-500/30 transition-all overflow-hidden group"
      >
        {/* Gradient background on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-transparent"
        />

        {/* Glow effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
            
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg glass border border-zinc-800 hover:border-purple-500/50 transition-all"
              >
                <Github className="w-4 h-4 text-zinc-400" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg glass border border-zinc-800 hover:border-purple-500/50 transition-all"
              >
                <ExternalLink className="w-4 h-4 text-zinc-400" />
              </motion.button>
            </div>
          </div>

          {/* Description */}
          <p className="text-zinc-400 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-2 mb-6">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex gap-2 text-sm text-zinc-500">
                <span className="text-purple-400 mt-1 flex-shrink-0">→</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Period and Location */}
          <div className="mt-4 pt-4 border-t border-zinc-800/50 flex flex-col md:flex-row gap-2 text-xs text-zinc-600">
            <span>{project.period}</span>
            <span className="hidden md:inline">•</span>
            <span>{project.location}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
