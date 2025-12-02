'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Vedic AI Calculator',
    description: 'Built a comprehensive full-stack astrology calculator application that performs precise astronomical calculations using Swiss Ephemeris library and provides intelligent chart interpretation using Google Gemini 2.5. Integrated a modern React frontend with TypeScript and a robust FastAPI backend, allowing real-time chart generation, planetary position calculations, and AI-powered astrological analysis with RAG implementation.',
    period: 'May 2025 – Present',
    location: 'Remote',
    highlights: [
      'Performs precise astronomical calculations for astrological chart generation using Swiss Ephemeris',
      'Provides intelligent chart interpretation using Google Gemini 2.5 with advanced prompt engineering',
      'Implements RAG (Retrieval-Augmented Generation) for context-aware astrological analysis',
      'Displays detailed astrological charts with accurate planetary placements and house divisions',
      'Enables seamless interaction between a React-based frontend and a FastAPI backend',
    ],
    tech: ['Python', 'TypeScript', 'JavaScript', 'FastAPI', 'React', 'Swiss Ephemeris', 'Tailwind CSS', 'Pydantic', 'Google Gemini 2.5', 'RAG', 'Prompt Engineering'],
    size: 'large',
    githubUrl: 'https://github.com/Kush402/vedic-ai',
    externalUrl: null,
  },
  {
    title: 'Fal-AI-Slack-Integration',
    description: 'Built a comprehensive AI-powered content generation platform integrated with Slack workspace for seamless business workflow automation. Integrated 8+ fal.ai services with 26+ AI models for generating professional images, videos, audio, and 3D content using multi-service architecture.',
    period: 'June 2025 – August 2025',
    location: 'St. Louis, MO',
    highlights: [
      'Generates professional images, videos, audio, and 3D content using 26+ AI models',
      'Integrates with Slack workspace for seamless business workflow automation',
      'Provides real-time content generation with advanced AI model orchestration',
      'Enables multi-user session management with Redis for 1000+ concurrent sessions',
      'Supports automatic asset storage in Google Drive with OAuth integration',
    ],
    tech: ['JavaScript', 'Node.js', 'Express.js', 'Slack Bolt SDK', 'Redis', 'PM2', 'Google Drive API', 'Google Gemini API', 'Fal.ai API', 'JWT Authentication'],
    size: 'large',
    githubUrl: 'https://github.com/Kush402/Fal-AI-Slack-integration',
    externalUrl: null,
  },
  {
    title: 'Pitch Deck Generator',
    description: 'Built a powerful AI-driven platform for generating marketing scripts, media prompts, and assets for brand presentations using Google Gemini 2.0 Flash and Fal.ai. Integrated comprehensive workflow automation from script generation to final asset creation with Google Drive storage and Slack integration for seamless brand presentation development.',
    period: 'May 2025 – June 2025',
    location: 'St. Louis, MO',
    highlights: [
      'Generates compelling marketing scripts using Google Gemini 2.0 Flash with brand-aligned content',
      'Creates high-quality images and animations using Fal.ai based on script content and brand guidelines',
      'Automatically organizes and stores assets in Google Drive with session-based folder management',
      'Ensures all content aligns with brand voice, values, and visual identity guidelines',
      'Provides streamlined workflow automation from script generation to final asset creation',
    ],
    tech: ['JavaScript', 'Node.js', 'Express.js', 'Google Gemini 2.0 Flash', 'Fal.ai API', 'Google Drive API', 'Slack API', 'REST API', 'AI/ML Integration'],
    size: 'medium',
    githubUrl: 'https://github.com/Kush402/pitch-deck-generator',
    externalUrl: null,
  },
  {
    title: 'Customer Churn Prediction Dashboard',
    description: 'Developed a full-stack machine learning dashboard to predict customer churn using an XGBoost model. Integrated a React frontend with a Flask backend, allowing real-time predictions, model performance visualization, and feature importance analysis.',
    period: 'May 2025 – May 2025',
    location: 'Tempe, AZ',
    highlights: [
      'Predicts whether a telecom customer is likely to churn based on their usage and contract details',
      'Provides churn probability (%) with a detailed form submission',
      'Displays model performance metrics (accuracy, precision, recall, F1-score, AUC)',
      'Visualizes feature importance using SHAP explanations',
      'Enables seamless interaction between a React-based frontend and a Flask API backend',
    ],
    tech: ['Python', 'JavaScript', 'Flask', 'React', 'XGBoost', 'pandas', 'scikit-learn', 'SHAP', 'React Router', 'Tailwind CSS', 'REST API'],
    size: 'medium',
    githubUrl: 'https://github.com/Kush402/Customer-churn-dashboard-',
    externalUrl: null,
  },
  {
    title: 'Sales Forecasting Dashboard',
    description: 'Built a full-stack dashboard that empowers product teams and retailers to forecast future sales trends using historical data. This project integrates data science, time-series forecasting, and interactive visualization into one end-to-end solution using ARIMA, Facebook Prophet, and LSTM models.',
    period: 'April 2025 – April 2025',
    location: 'Tempe, AZ',
    highlights: [
      'Forecast product sales for any selected time range with multiple ML models',
      'Analyze seasonality, trends, and outliers in sales data',
      'Compare model performance (MAE, RMSE) across ARIMA, Prophet, and LSTM',
      'Filter by product category, region, or channel for targeted insights',
      'Enabled proactive sales planning, reduced stockouts, and visualized actionable insights',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Facebook Prophet', 'ARIMA', 'LSTM', 'Keras', 'Dash', 'Plotly', 'Power BI', 'Time Series Analysis'],
    size: 'medium',
    githubUrl: 'https://github.com/Kush402/Sales-Forecast-Request-Dashboard',
    externalUrl: null,
  },
  {
    title: 'Automated Data Analysis and Reporting System',
    description: 'Designed and implemented a fully automated data analysis and reporting system to streamline web-based data collection and enhance reporting accuracy. Leveraged Python to develop a web crawler and scraper using Selenium and BeautifulSoup to extract and clean over 10,000 data points from various websites.',
    period: 'November 2024 – December 2024',
    location: 'Tempe, AZ',
    highlights: [
      'Developed web crawler and scraper using Selenium and BeautifulSoup to extract 10,000+ data points',
      'Integrated OpenAI ChatGPT API for automated report generation, improving reporting efficiency by 40%',
      'Optimized scraper performance using multithreading and efficient data pipelines',
      'Achieved 30% reduction in total execution time through parallel processing',
      'Made the system scalable and reliable for high-volume use cases',
    ],
    tech: ['Python', 'Selenium', 'Beautiful Soup', 'OpenAI API', 'NLP', 'Prompt Engineering', 'XPath', 'Multithreading', 'Data Pipelines'],
    size: 'medium',
    githubUrl: null,
    externalUrl: null,
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="max-w-7xl mx-auto" style={{ paddingTop: '80px', paddingBottom: '80px' }} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-16 pb-8 border-b-2 border-zinc-800/50"
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

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
        onMouseMove={handleMouseMove}
        whileHover={{ scale: 1.02, y: -4 }}
        className="relative glass rounded-2xl p-8 md:p-10 border-2 border-zinc-800/50 hover:border-purple-500/50 transition-all overflow-hidden group cursor-pointer flex flex-col"
        style={{
          boxShadow: isHovered 
            ? `0 20px 40px -10px rgba(168, 85, 247, 0.3), 0 0 0 1px rgba(168, 85, 247, 0.1)` 
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Animated gradient background on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent"
          style={{
            background: isHovered
              ? `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.1), transparent 70%)`
              : 'transparent',
          }}
        />

        {/* Multiple glow effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            scale: isHovered ? 1.2 : 0.8,
            x: isHovered ? mousePosition.x * 0.1 : 0,
            y: isHovered ? mousePosition.y * 0.1 : 0,
          }}
          transition={{ duration: 0.4, type: 'spring', stiffness: 50 }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ 
            opacity: isHovered ? 0.6 : 0, 
            scale: isHovered ? 1 : 0.6,
            x: isHovered ? -mousePosition.x * 0.05 : 0,
            y: isHovered ? -mousePosition.y * 0.05 : 0,
          }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 30 }}
          className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"
        />

        {/* Animated border glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-2xl"
          style={{
            boxShadow: isHovered
              ? `inset 0 0 20px rgba(168, 85, 247, 0.2)`
              : 'none',
          }}
        />

        <div className="relative z-10 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-5 gap-4 px-2">
            <h3 className="text-2xl md:text-3xl font-bold group-hover:text-purple-400 transition-colors flex-1 break-words leading-tight">
              {project.title}
            </h3>
            
            <div className="flex gap-2 flex-shrink-0">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg glass border-2 border-zinc-800 hover:border-purple-500/70 hover:bg-purple-500/10 transition-all group/btn"
                >
                  <Github className="w-5 h-5 text-zinc-400 group-hover/btn:text-purple-400 transition-colors" />
                </motion.a>
              )}
              {project.externalUrl && (
                <motion.a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg glass border-2 border-zinc-800 hover:border-purple-500/70 hover:bg-purple-500/10 transition-all group/btn"
                >
                  <ExternalLink className="w-5 h-5 text-zinc-400 group-hover/btn:text-purple-400 transition-colors" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-zinc-300 mb-5 leading-relaxed text-base md:text-lg break-words px-2">
            {project.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-2 mb-6 px-2">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex gap-3 text-sm md:text-base text-zinc-400 leading-relaxed">
                <span className="text-purple-400 mt-0.5 flex-shrink-0">→</span>
                <span className="break-words">{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-8 px-2">
            {project.tech.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 text-sm rounded-full bg-zinc-800/50 text-zinc-300 border-2 border-zinc-700/50 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default break-words"
                style={{ margin: '4px' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Period and Location */}
          <div 
            className="border-t border-zinc-800/50 flex flex-col md:flex-row items-center gap-3 text-sm text-zinc-500"
            style={{ marginTop: '24px', marginBottom: '16px', marginLeft: '8px', marginRight: '8px', paddingTop: '16px' }}
          >
            <span>{project.period}</span>
            <span className="hidden md:inline" style={{ lineHeight: 1 }}>•</span>
            <span>{project.location}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
