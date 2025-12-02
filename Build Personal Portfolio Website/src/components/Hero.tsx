'use client';

import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { TypewriterEffect } from './TypewriterEffect';
import { ShimmerButton } from './ShimmerButton';

export function Hero() {
  const words = [
    { text: 'Building' },
    { text: 'the' },
    { text: 'future' },
    { text: 'of', className: 'text-zinc-400' },
    { text: 'AI-powered', className: 'gradient-text' },
    { text: 'automation', className: 'gradient-text' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center"
      >
        {/* Name Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-zinc-800/50">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-zinc-400">Available for opportunities</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="mb-6"
        >
          <span className="block text-zinc-500 mb-2">Hi, I'm</span>
          <span className="block text-7xl md:text-8xl tracking-tight mb-4">
            Kush Sharma
          </span>
        </motion.h1>

        {/* Typewriter headline */}
        <div className="mb-8 min-h-[60px] flex items-center justify-center">
          <TypewriterEffect words={words} />
        </div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Computer Science student at ASU specializing in AI/ML, full-stack development, 
          and intelligent automation. Building scalable systems that transform data into actionable insights.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <ShimmerButton href="#projects">
            View My Work
            <ArrowRight className="w-4 h-4 ml-2" />
          </ShimmerButton>
          
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl glass border border-zinc-800 hover:border-zinc-700 transition-all group"
          >
            <span className="text-zinc-300 group-hover:text-white transition-colors">
              Experience
            </span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: 'https://github.com/kushsharma', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/kushsharma', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:contact@kushsharma.com', label: 'Email' },
            { icon: Phone, href: 'tel:+16026226832', label: '(602) 622-6832' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl glass border border-zinc-800 hover:border-purple-500/50 transition-all group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon className="w-5 h-5 text-zinc-400 group-hover:text-purple-400 transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-zinc-800 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 rounded-full bg-purple-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
