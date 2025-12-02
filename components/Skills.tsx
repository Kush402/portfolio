'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Database,
  Code2,
  Brain,
  Server,
  Palette,
  FileText,
  Users,
} from 'lucide-react';

const skillCategories = [
  {
    category: 'Data & Analytics',
    icon: Database,
    skills: ['SQL', 'BigQuery', 'Power BI', 'Tableau', 'Google Analytics', 'Pandas', 'Matplotlib', 'Redis'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Programming & Web',
    icon: Code2,
    skills: ['Python', 'JavaScript', 'React', 'Vue', 'HTML/CSS', 'Node.js', 'C/C++', 'TypeScript', 'NumPy'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    skills: ['OpenAI API', 'scikit-learn', 'NLP', 'ChatGPT Engineering', 'Axios', 'RAG', 'LLM Workflows'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    category: 'DevOps & Tools',
    icon: Server,
    skills: ['Git', 'Docker', 'AWS', 'PM2', 'MongoDB', 'Redis'],
    color: 'from-orange-500 to-red-500',
  },
  {
    category: 'Creative Skills',
    icon: Palette,
    skills: ['UI Layout Design', 'Branding Collateral', 'Rapid Ideation'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    category: 'Communication',
    icon: FileText,
    skills: ['Technical Writing', 'User Guides', 'Stakeholder Presentations', 'Documentation'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    category: 'Leadership',
    icon: Users,
    skills: ['Cross-Functional Collaboration', 'Project Management', 'Team Leadership', 'Mission Team Lead'],
    color: 'from-indigo-500 to-blue-500',
  },
];

export function Skills() {
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
        <h2 className="text-5xl md:text-6xl mb-4">Skills & Expertise</h2>
        <p className="text-xl text-zinc-400">
          Full-stack development, AI/ML, and data analytics
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="glass rounded-2xl p-6 border-2 border-zinc-800/50 hover:border-purple-500/50 transition-all group shadow-lg hover:shadow-purple-500/20"
          >
            {/* Icon and Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10`}>
                <category.icon className="w-6 h-6 text-zinc-100" />
              </div>
              <h3 className="text-xl group-hover:text-purple-400 transition-colors">
                {category.category}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 px-2">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 text-sm rounded-lg bg-zinc-800/50 text-zinc-300 border-2 border-zinc-700/50 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default"
                  style={{ margin: '4px' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Infinite Scrolling Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ marginBottom: '150px' }}
      >
        <h3 className="text-2xl mb-8 text-center text-zinc-400">
          Technologies I Work With
        </h3>
        <SkillsMarquee />
      </motion.div>

      {/* Awards Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        style={{ marginTop: '80px' }}
      >
        <h3 className="text-3xl md:text-4xl mb-12 font-bold">Awards & Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {[
            {
              title: 'Full-Ride Scholarship',
              description: 'Sole international student awarded full scholarship in NGSC program',
              icon: '🎓',
            },
            {
              title: 'Published Research',
              description: 'Research paper on K-Nearest Neighbor machine learning algorithm',
              icon: '📄',
              link: 'https://t.ly/sczQ',
            },
            {
              title: 'Stanford AI Certificate',
              description: 'Certified in Artificial Intelligence and Machine Learning from Stanford University',
              icon: '🏆',
            },
            {
              title: 'Deloitte Data Analytics',
              description: 'Completed Data Analytics Job Simulation on Forage with hands-on experience',
              icon: '💼',
            },
          ].map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-8 border-2 border-zinc-800/50 hover:border-purple-500/30 transition-all group shadow-xl"
            >
              <div className="flex items-start gap-6">
                <span className="text-5xl flex-shrink-0">{award.icon}</span>
                <div className="flex-1">
                  <h4 className="text-xl mb-4 group-hover:text-purple-400 transition-colors font-semibold">
                    {award.title}
                  </h4>
                  <p className="text-zinc-400 leading-relaxed text-base">
                    {award.description}
                  </p>
                  {award.link && (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      View Publication →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function SkillsMarquee() {
  const allSkills = [
    'Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Vue.js',
    'SQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Git', 'OpenAI', 'Gemini AI',
    'scikit-learn', 'Pandas', 'NumPy', 'TensorFlow', 'Power BI', 'Tableau',
    'FastAPI', 'Flask', 'Express.js', 'PostgreSQL', 'Firebase', 'Supabase',
    'Tailwind CSS', 'GraphQL', 'REST API', 'Kubernetes', 'Linux', 'Nginx',
    'LangChain', 'RAG', 'Prompt Engineering', 'ChatGPT', 'Claude', 'Vercel',
    'GitHub Actions', 'CI/CD', 'Jupyter', 'Matplotlib', 'Seaborn', 'BigQuery',
  ];

  // Create the skill items
  const SkillItem = ({ skill }: { skill: string }) => (
    <div className="px-6 py-3 rounded-xl glass border border-zinc-800/50 text-zinc-300 flex-shrink-0">
      {skill}
    </div>
  );

  return (
    <div 
      className="relative py-8"
      style={{ 
        width: '100vw', 
        marginLeft: 'calc(-40vw + 50%)',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Gradient overlays - fixed to viewport edges */}
      <div 
        className="absolute left-0 top-0 bottom-0 z-10" 
        style={{ 
          width: '120px',
          background: 'linear-gradient(to right, rgb(9, 9, 11), transparent)'
        }} 
      />
      <div 
        className="absolute right-0 top-0 bottom-0 z-10" 
        style={{ 
          width: '120px',
          background: 'linear-gradient(to left, rgb(9, 9, 11), transparent)'
        }} 
      />

      {/* Scrolling wrapper - exactly centered */}
      <div 
        style={{ 
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'max-content',
        }}
      >
        <motion.div
          animate={{ x: [0, -2800] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
          className="flex gap-6 whitespace-nowrap"
        >
          {/* Duplicate skills 4 times for seamless infinite loop */}
          {[...allSkills, ...allSkills, ...allSkills, ...allSkills].map((skill, index) => (
            <SkillItem key={`${skill}-${index}`} skill={skill} />
          ))}
        </motion.div>
      </div>

      {/* Invisible spacer to maintain height */}
      <div className="flex gap-6 whitespace-nowrap opacity-0 pointer-events-none">
        {allSkills.slice(0, 5).map((skill, index) => (
          <SkillItem key={`spacer-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}
