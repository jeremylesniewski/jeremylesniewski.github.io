'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 0.66, 0.66, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_32%),linear-gradient(135deg,#050505_0%,#101010_48%,#050505_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute left-6 right-6 top-24 bottom-16 border border-neutral-900/80 md:left-12 md:right-12" />
      <div className="absolute left-0 right-0 top-1/2 h-px bg-neutral-900" />
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-neutral-900" />

      <div className="absolute inset-x-6 bottom-8 hidden items-end justify-between text-xs font-mono uppercase tracking-wider text-neutral-700 md:inset-x-12 md:flex">
        <span>Recording</span>
        <span>Production</span>
        <span>Sound design</span>
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 mb-8 md:mb-12"
        >
          <div className="w-8 h-px bg-neutral-500" />
          <p className="text-xs md:text-sm font-mono text-neutral-400 uppercase tracking-wider">
            Berlin
          </p>
          <div className="w-8 h-px bg-neutral-500" />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-balance mb-6 md:mb-8 uppercase"
        >
          Jeremy Lesniewski
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-neutral-400 text-balance max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed"
        >
          Music Production / Recording / Custom Bands / Sound Design
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:gap-4"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 md:px-10 md:py-4 bg-white text-black font-medium text-sm md:text-base hover:bg-neutral-200 transition-colors"
          >
            Book Session
          </a>
          <a
            href="#services"
            className="inline-block px-8 py-3 md:px-10 md:py-4 border border-neutral-600 text-white font-medium text-sm md:text-base hover:border-white transition-colors"
          >
            View Services
          </a>
          <a
            href="#work"
            className="inline-block px-8 py-3 md:px-10 md:py-4 border border-neutral-800 text-neutral-300 font-medium text-sm md:text-base hover:border-neutral-500 hover:text-white transition-colors"
          >
            Listen
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs font-mono text-neutral-500">Scroll</p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-neutral-500"
          >
            <path
              d="M10 16V4M10 16l-3-3M10 16l3-3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
