'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { label: 'Services', href: '#services' },
        { label: 'Work', href: '#work' },
        { label: 'About', href: '#about' },
        { label: 'Tools', href: '#tools' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'Email', href: 'mailto:jeremy@neecratch.com' },
        { label: 'Booking', href: '#contact' },
        { label: 'Instagram', href: 'https://instagram.com/neecratch' },
        { label: 'Berlin', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Impressum', href: '/impressum' },
      ],
    },
  ];

  return (
    <footer className="border-t border-neutral-800 bg-black">
      <div className="section-padding">
        <div className="container-max">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
              <h3 className="font-mono font-semibold text-base mb-4">
                JEREMY LESNIEWSKI
              </h3>
              <p className="text-xs text-neutral-500">
                
              </p>
            </motion.div>

            {footerSections.map((section) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h4 className="font-mono font-semibold text-sm uppercase text-neutral-400 mb-4 tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-neutral-500 hover:text-white transition-colors"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={
                          link.href.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="border-t border-neutral-800 py-8 md:py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-2"
              >
                <p className="text-xs font-mono text-neutral-600">
                  (c) {currentYear} Jeremy Lesniewski. All rights reserved.
                </p>
                <p className="text-xs text-neutral-600">
                  Berlin, Germany.
                </p>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-xs text-neutral-700 text-right md:text-left"
              >
                Music production / Recording / Sound design
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
