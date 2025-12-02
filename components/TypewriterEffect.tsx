'use client';

import { motion } from 'motion/react';

interface Word {
  text: string;
  className?: string;
}

interface TypewriterEffectProps {
  words: Word[];
  className?: string;
}

export function TypewriterEffect({ words, className = '' }: TypewriterEffectProps) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 ${className}`}>
      {words.map((word, idx) => (
        <motion.span
          key={`${word.text}-${idx}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: idx * 0.15,
          }}
          className={`text-3xl md:text-4xl ${word.className || 'text-zinc-100'}`}
        >
          {word.text}
        </motion.span>
      ))}
    </div>
  );
}
