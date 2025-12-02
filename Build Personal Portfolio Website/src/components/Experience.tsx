'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Building2, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Paradowski Creative',
    role: 'Business Analyst Intern',
    period: 'August 2025 – Present',
    location: 'St. Louis, MO / Tempe, AZ',
    description: [
      'Engineering backend automation workflows to streamline internal communications by connecting disparate software tools and automating message generation, reducing manual data entry.',
      'Architecting robust data classification frameworks and tagging systems to optimize business operations, ensuring data integrity and accessibility across internal tooling.',
      'Collaborating with technical and operations leads to deploy automated solutions, ensuring seamless adoption and process integration across non-technical departments.',
    ],
    current: true,
  },
  {
    company: 'Paradowski Creative',
    role: 'AI Intern',
    period: 'May 2025 – August 2025',
    location: 'St. Louis, MO',
    description: [
      'Built scalable LLM workflows using Gemini and Fal.ai, integrating Retrieval-Augmented Generation (RAG) and custom embeddings to boost context relevance and reduce hallucinations across multi-turn interactions.',
      'Developed a Multiple Context Protocol (MCP) server to manage dynamic input contexts from multiple sources, enabling accurate long form reasoning and improving model consistency by 80%.',
      'Engineered 100+ optimized prompts for diverse NLP tasks (summarization, classification, retrieval), orchestrated via Axios-based pipelines and evaluated using semantic similarity and output coherence metrics.',
      'Authored internal libraries and prompt documentation to standardize development across teams, reducing prompt iteration cycles by 60% and accelerating cross-functional adoption of LLM-powered systems.',
    ],
  },
  {
    company: 'Next Generation Service Corps',
    role: 'Principled Innovation Intern',
    period: 'August 2024 – May 2025',
    location: 'Tempe, AZ',
    description: [
      'Designing a full-stack websites for the Next Generation Service Corps (NGSC), utilizing HTML, CSS, JavaScript, and MongoDB to improve organizational outreach and streamline communication.',
      'Performed data analysis and visualization leveraging SQL, Pandas, and Matplotlib, reducing data redundancy by 30% and improving reporting efficiency.',
      'Conducting research and data analytics for the NGSC Principled Innovation project, assessing over 1,000 data points using advanced statistical methodologies, resulting in a 25% improvement in program effectiveness and a 20% increase in student engagement.',
      'Developing interactive dashboards and automated reports to track program effectiveness and learner engagement.',
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="max-w-6xl mx-auto px-4" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-5xl md:text-6xl mb-4">Experience</h2>
        <p className="text-xl text-zinc-400">
          Building innovative solutions across AI, automation, and data analytics
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-24"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] md:left-[27px] top-6 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-zinc-950" />
              
              {/* Current indicator */}
              {exp.current && (
                <div className="absolute left-[-9px] md:left-[23px] top-[20px] w-5 h-5 rounded-full bg-purple-500/30 animate-ping" />
              )}

              {/* Content card */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="glass rounded-2xl p-6 md:p-8 border border-zinc-800/50 hover:border-purple-500/30 transition-all group"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl mb-2 group-hover:text-purple-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-zinc-400 mb-2">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                      {exp.current && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1 text-sm text-zinc-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-zinc-300 leading-relaxed">
                      <span className="text-purple-400 mt-2 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
