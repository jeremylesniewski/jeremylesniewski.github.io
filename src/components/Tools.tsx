'use client';

import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  'Analog Texture Rack',
  'Drum Kits',
  'Experimental FX Chain',
  'Rehearsal Room Pack',
];

export default function Tools() {
  return (
    <section id="tools" className="section-padding border-t border-neutral-800">
      <div className="container-max">
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-px bg-neutral-500" />
            <p className="text-xs md:text-sm font-mono text-neutral-400 uppercase tracking-wider">
              VST / Tools
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-balance">
            Sound tools for production, texture, and experiments.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-px bg-neutral-800 border border-neutral-800 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {tools.map((tool) => (
            <motion.div
              key={tool}
              className="bg-black p-6 md:p-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">{tool}</h3>
              <p className="text-neutral-500">
                Available by request for sessions, production work, and sound design projects.
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 md:px-10 md:py-4 bg-white text-black font-medium text-sm md:text-base hover:bg-neutral-200 transition-colors"
          >
            Request Access
          </a>
        </motion.div>
      </div>
    </section>
  );
}
