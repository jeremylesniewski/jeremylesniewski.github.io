'use client';

import React from 'react';
import { motion } from 'framer-motion';

type WorkLink = {
  label: string;
  url: string;
};

type AudioPair = {
  before: string;
  after: string;
};

type WorkProject = {
  artist: string;
  title: string;
  year: string;
  format: string;
  role: string;
  cover: string;
  description: string;
  audio: AudioPair;
  done: string[];
  links: WorkLink[];
};

const works: WorkProject[] = [
  {
    artist: 'Shoshana',
    title: 'W Szarym Miescie',
    year: '2025',
    format: 'Album / CD master',
    role: 'Recording engineer, editing, mix, master',
    cover: 'https://f4.bcbits.com/img/a4244274974_10.jpg',
    description:
      'A full-length grunge and alternative record shaped from raw studio takes into a louder, clearer, release-ready album while keeping the band feel intact.',
    audio: {
      before: '/audio/00_Wrastam_7take25102510_raw.mp3',
      after: '/audio/02Wrastam[CD Master].mp3',
    },
    done: [
      'Tracked full band sessions',
      'Edited drums, guitars, bass, and vocals',
      'Cleaned noise and tightened transitions',
      'Balanced dense guitar layers',
      'Mixed vocals into the band without losing grit',
      'Prepared final CD master',
    ],
    links: [
      {
        label: 'Bandcamp',
        url: 'https://voiaudio.bandcamp.com/album/w-szarym-mie-cie-cd-master',
      },
      {
        label: 'Spotify',
        url: 'https://open.spotify.com/search/Shoshana%20W%20Szarym%20Miescie',
      },
    ],
  },
  {
    artist: 'Shoshana',
    title: 'Live At The Basement',
    year: '2023',
    format: 'Live EP',
    role: 'Live recording, mix, streaming master',
    cover: 'https://f4.bcbits.com/img/a1092665623_10.jpg',
    description:
      'A basement live session kept intentionally raw, then mixed for definition, impact, and translation without sanding down the rehearsal-room energy.',
    audio: {
      before: '/audio/shoshana-live-at-the-basement-before.mp3',
      after: '/audio/shoshana-live-at-the-basement-after.mp3',
    },
    done: [
      'Captured the room as a live performance',
      'Reduced harsh bleed and low-end buildup',
      'Built a stable vocal and guitar balance',
      'Enhanced drums without over-polishing',
      'Added depth with restrained space effects',
      'Delivered a streaming-ready master',
    ],
    links: [
      {
        label: 'Bandcamp',
        url: 'https://voiaudio.bandcamp.com/',
      },
      {
        label: 'Spotify',
        url: 'https://open.spotify.com/search/Shoshana%20Live%20At%20The%20Basement',
      },
    ],
  },
  {
    artist: 'SOUGORSHEE',
    title: 'Eclectic Delusion',
    year: '2024',
    format: 'EP',
    role: 'Songwriting, engineering, production, mix',
    cover: 'https://f4.bcbits.com/img/a4258876001_10.jpg',
    description:
      'Basement jams turned into a focused psychedelic EP, with arrangement, tone-shaping, and effects work used to pull a coherent release out of rough long-form recordings.',
    audio: {
      before: '/audio/sougorshee-eclectic-delusion-before.mp3',
      after: '/audio/sougorshee-eclectic-delusion-after.mp3',
    },
    done: [
      'Selected strongest sections from long jams',
      'Arranged raw recordings into finished songs',
      'Layered bass, synth, and guitar parts',
      'Processed vocals for psychedelic texture',
      'Designed delays, reverbs, and modulation',
      'Mixed the EP into one consistent world',
    ],
    links: [
      {
        label: 'Bandcamp',
        url: 'https://voiaudio.bandcamp.com/album/eclectic-delusion-ep',
      },
      {
        label: 'Spotify',
        url: 'https://open.spotify.com/search/SOUGORSHEE%20Eclectic%20Delusion',
      },
    ],
  },
  {
    artist: 'SOUGORSHEE',
    title: 'Dog Heading Back Home',
    year: '2023',
    format: 'Session recordings',
    role: 'Songwriting, engineering, production, mix/master',
    cover: 'https://f4.bcbits.com/img/a4060017996_10.jpg',
    description:
      'A set of basement session recordings refined into a release that still feels spontaneous, with punch, separation, and atmosphere built around the original performances.',
    audio: {
      before: '/audio/sougorshee-dog-heading-back-home-before.mp3',
      after: '/audio/sougorshee-dog-heading-back-home-after.mp3',
    },
    done: [
      'Edited session material into release form',
      'Cleaned timing and performance rough edges',
      'Added bass saturation and drum weight',
      'Built vocal layers and atmospheric space',
      'Controlled dynamics across the track set',
      'Finished mix and master for release',
    ],
    links: [
      {
        label: 'Bandcamp',
        url: 'https://voiaudio.bandcamp.com/album/dog-heading-back-home-2023-sessions',
      },
      {
        label: 'Spotify',
        url: 'https://open.spotify.com/search/SOUGORSHEE%20Dog%20Heading%20Back%20Home',
      },
    ],
  },
];

function AudioPlayer({ label, src }: { label: string; src: string }) {
  return (
    <div className="border border-neutral-800 bg-neutral-950/70 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
          {label}
        </span>
        <span className="font-mono text-[10px] text-neutral-700">MP3</span>
      </div>
      <audio className="h-10 w-full" controls preload="metadata">
        <source src={src} type="audio/mpeg" />
      </audio>
    </div>
  );
}

function WorkCard({ work, index }: { work: WorkProject; index: number }) {
  return (
    <motion.article
      className="grid gap-6 border border-neutral-800 bg-black/40 p-5 md:grid-cols-[180px_1fr] md:p-6 lg:grid-cols-[220px_1fr]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <div className="space-y-4">
        <div className="aspect-square overflow-hidden border border-neutral-800 bg-neutral-950">
          <img
            src={work.cover}
            alt={`${work.artist} - ${work.title} cover`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {work.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-700 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-neutral-300 transition-colors hover:border-white hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="min-w-0">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="border border-neutral-700 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-neutral-400">
            {work.format}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-600">
            {work.year}
          </span>
        </div>

        <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-neutral-500">
          {work.artist}
        </p>
        <h3 className="mb-3 text-2xl font-light text-white md:text-3xl">{work.title}</h3>
        <p className="mb-5 font-mono text-[11px] uppercase tracking-wider text-neutral-600">
          {work.role}
        </p>
        <p className="mb-6 max-w-3xl text-sm leading-7 text-neutral-400 md:text-base">
          {work.description}
        </p>

        <div className="mb-6 grid gap-3 lg:grid-cols-2">
          <AudioPlayer label="Before" src={work.audio.before} />
          <AudioPlayer label="After" src={work.audio.after} />
        </div>

        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-neutral-600">
            Edits
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {work.done.map((item) => (
              <li
                key={item}
                className="border border-neutral-800 bg-neutral-950/60 px-3 py-2 text-sm text-neutral-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

export default function Works() {
  return (
    <section id="work" className="section-padding border-t border-neutral-800 bg-black">
      <div className="container-max">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-4 bg-neutral-500" />
            <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
              Work
            </p>
          </div>
          <h2 className="max-w-3xl text-4xl font-light text-white md:text-5xl">
            Before and after production work
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-500 md:text-base">
            A direct view of selected releases: what came in, what changed, and where
            the finished work lives.
          </p>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {works.map((work, index) => (
            <WorkCard key={`${work.artist}-${work.title}`} work={work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
