'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ServiceArea {
  id: string;
  title: string;
  price: string;
  description: string;
  cta: string;
}

const services: ServiceArea[] = [
  {
    id: 'recording',
    title: 'Recording Session',
    price: 'EUR 0 / hour',
    description:
      'Vocal recording, instruments, rehearsal room recording, engineered session included.',
    cta: 'Book Recording',
  },
  {
    id: 'mixing',
    title: 'Mixing',
    price: 'from EUR0 per track',
    description:
      'Professional mixing, vocal tuning, and focused revisions for release-ready songs.',
    cta: 'Order Mixing',
  },
  {
    id: 'mastering',
    title: 'Mastering',
    price: 'EUR0 per track',
    description:
      'Streaming-ready mastering, final polish, and export preparation for distribution.',
    cta: 'Master Track',
  },
  {
    id: 'production',
    title: 'Music Production',
    price: 'from EUR400',
    description:
      'Full track production from first idea, reference, or demo to a finished song.',
    cta: 'Start Project',
  },
  {
    id: 'custom-projects',
    title: 'Custom Bands / Projects',
    price: 'from EUR500-2000+',
    description:
      'Building full music projects, band setup, rehearsals, recording, and production.',
    cta: 'Build My Project',
  },
  {
    id: 'tools',
    title: 'VST / Sound Tools',
    price: 'Free / pay-what-you-want / licensed',
    description:
      'Custom plugins, Ableton racks, sample packs, and sound design tools.',
    cta: 'Explore Tools',
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="section-padding border-t border-neutral-800">
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
              Services
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-balance">
            Services for songs, sessions, and full projects.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="flex min-h-[320px] flex-col bg-black p-6 md:p-8"
            >
              <p className="text-xs font-mono text-neutral-600 uppercase tracking-wider mb-5">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-base font-mono text-neutral-300 mb-8">
                {service.price}
              </p>
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-8">
                {service.description}
              </p>
              <a
                href={service.id === 'tools' ? '#tools' : '#contact'}
                className="mt-auto inline-flex items-center text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                {service.cta}
                <span className="ml-2">-&gt;</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
