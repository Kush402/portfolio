'use client';

import { Home, Briefcase, FolderGit2, Code2, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'projects', icon: FolderGit2, label: 'Projects' },
  { id: 'skills', icon: Code2, label: 'Skills' },
];

export function FloatingDock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass rounded-2xl px-6 py-4 shadow-2xl">
        <div className="flex items-center gap-4">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative p-3 rounded-xl transition-colors hover:bg-zinc-800/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-5 h-5 text-zinc-400 hover:text-purple-400 transition-colors" />
              
              {hoveredIndex === index && (
                <motion.div
                  layoutId="dock-hover"
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
              
              {/* Tooltip */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-zinc-900 rounded-lg text-xs text-zinc-300 whitespace-nowrap border border-zinc-800"
                >
                  {item.label}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 border-r border-b border-zinc-800 rotate-45" />
                </motion.div>
              )}
            </motion.button>
          ))}
          
          {/* Divider */}
          <div className="w-px h-8 bg-zinc-800" />
          
          {/* Contact button */}
          <motion.a
            href="mailto:contact@kushsharma.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            <Mail className="w-5 h-5 text-white" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
