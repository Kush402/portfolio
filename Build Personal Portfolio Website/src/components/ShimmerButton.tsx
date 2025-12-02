'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ShimmerButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}

export function ShimmerButton({ children, href, onClick }: ShimmerButtonProps) {
  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <Component
      {...props}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex items-center px-8 py-4 rounded-xl overflow-hidden group"
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_100%] animate-[shimmer_2s_infinite]" />
      
      {/* Inner glow */}
      <div className="absolute inset-[1px] rounded-xl bg-zinc-950 flex items-center justify-center">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl" />
        </div>
      </div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center text-zinc-100 group-hover:text-white transition-colors">
        {children}
      </span>
    </Component>
  );
}
