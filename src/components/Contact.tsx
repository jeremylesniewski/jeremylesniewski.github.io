'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    message: '',
    references: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Booking request:', formState);
    setSubmitted(true);
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        service: '',
        date: '',
        message: '',
        references: '',
      });
      setSubmitted(false);
    }, 3000);
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
    <section id="contact" className="section-padding border-t border-neutral-800">
      <div className="container-max">
        <motion.div
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
        >
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-px bg-neutral-500" />
              <p className="text-xs md:text-sm font-mono text-neutral-400 uppercase tracking-wider">
                Booking
              </p>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-balance">
              Send a request.
            </h2>
            <p className="text-lg text-neutral-400 mt-6 max-w-xl">
              Share the service, date, project description, and references. I will respond with availability and next steps.
            </p>

            <div className="mt-12 space-y-8 border-t border-neutral-800 pt-8">
              <div>
                <p className="text-sm font-mono text-neutral-500 uppercase tracking-wider mb-3">
                  Email
                </p>
                <a
                  href="mailto:jeremylesniewski@icloud.com"
                  className="text-lg md:text-xl text-white hover:text-neutral-300 transition-colors"
                >
                  jeremylesniewski@icloud.com
                </a>
              </div>
              <div>
                <p className="text-sm font-mono text-neutral-500 uppercase tracking-wider mb-3">
                  Location
                </p>
                <p className="text-lg md:text-xl text-white">Berlin</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={itemVariants}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:border-white focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:border-white focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Service *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:border-white focus:outline-none transition-colors"
                >
                  <option value="">Choose service</option>
                  <option>Recording Session</option>
                  <option>Mixing</option>
                  <option>Mastering</option>
                  <option>Music Production</option>
                  <option>On-Site Recording</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-2">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formState.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message / Project description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:border-white focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about the project, sound, timeline, and what you need."
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="references" className="block text-sm font-medium mb-2">
                  References (optional)
                </label>
                <input
                  type="text"
                  id="references"
                  name="references"
                  value={formState.references}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:border-white focus:outline-none transition-colors"
                  placeholder="Links to songs, playlists, videos, or notes"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full px-8 py-4 bg-white text-black font-medium hover:bg-neutral-200 disabled:bg-neutral-600 transition-colors"
                >
                  {submitted ? 'Request sent' : 'Send Request'}
                </button>
              </div>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
