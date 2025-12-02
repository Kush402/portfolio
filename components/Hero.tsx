'use client';

import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
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
    <div className="relative min-h-screen flex items-center justify-center" style={{ paddingBottom: '80px' }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center w-full"
        style={{ paddingLeft: 'clamp(48px, 5vw, 80px)', paddingRight: 'clamp(48px, 5vw, 80px)' }}
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
          <span className="block text-zinc-500 mb-4 text-2xl md:text-3xl lg:text-4xl">Hi, I'm</span>
        </motion.h1>

        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex justify-center"
        >
          <div 
            className="rounded-full overflow-hidden border-4 border-zinc-800/50 shadow-2xl flex-shrink-0"
            style={{ 
              width: 'clamp(240px, 40vw, 290px)', 
              height: 'clamp(240px, 40vw, 290px)',
              aspectRatio: '1 / 1'
            }}
          >
            <img
              src="/Gemini_Generated_Image_1d4m3l1d4m3l1d4m.png"
              alt="Kush Sharma"
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                aspectRatio: '1 / 1'
              }}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="mb-6"
        >
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
          className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          style={{ marginBottom: '48px' }}
        >
          Computer Science student at ASU specializing in AI/ML, full-stack development, 
          and intelligent automation. Building scalable systems that transform data into actionable insights.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
          style={{ marginBottom: '48px' }}
        >
          <ShimmerButton href="#projects">
            View My Work
            <ArrowRight className="w-4 h-4 ml-2" />
          </ShimmerButton>
          
        <motion.a
          href="#experience"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-xl glass border border-zinc-800 hover:border-zinc-700 transition-all group min-w-[200px] inline-flex items-center justify-center"
          style={{ padding: '7px 20px' }}
        >
          <span className="text-zinc-300 group-hover:text-white transition-colors">
            Experience
          </span>
        </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 md:gap-6 flex-wrap w-full"
          style={{ marginTop: '48px' }}
        >
          {[
            { icon: Github, href: 'https://github.com/Kush402', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/kush-shxrmx/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:kushsharma024@gmail.com', label: 'Email' },
            { icon: Phone, href: 'tel:+16026226832', label: '(602) 622-6832' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-xl glass border border-zinc-800 hover:border-purple-500/50 transition-all group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon className="w-6 h-6 text-zinc-400 group-hover:text-purple-400 transition-colors" />
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
