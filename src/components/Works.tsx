'use client';

import React from 'react';
import { motion } from 'framer-motion';


export default function SelectedWork() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 0.66, 0.66, 1],
      },
    },
  };

  return (
    <section id="work" className="section-padding border-t border-neutral-800">
      <div className="container-max">
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-px bg-neutral-500" />
            <p className="text-xs md:text-sm font-mono text-neutral-400 uppercase tracking-wider">
              Work
            </p>
          </div>
          <p className="mt-6 max-w-3xl text-lg text-neutral-400">
            Past Works:
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-px bg-neutral-800 border border-neutral-800 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        ></motion.div>
      </div>
    </section>
  );
}
