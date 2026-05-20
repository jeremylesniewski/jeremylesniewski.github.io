'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type WorkLink = {
  label: string;
  url: string;
};

type Track = {
  title: string;
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
  tracks: Track[];
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
    tracks: [
      {
        title: 'Intro',
        before: '/audio/shoshana-intro-raw.mp3',
        after: '/audio/shoshana-intro-master.mp3',
      },
      {
        title: 'Wrastam',
        before: '/audio/00_Wrastam_7take25102510_raw.mp3',
        after: '/audio/02Wrastam[CD Master].mp3',
      },
      {
        title: 'Mam Dość',
        before: '/audio/shoshana-mam-dosc-raw.mp3',
        after: '/audio/shoshana-mam-dosc-master.mp3',
      },
      {
        title: 'Co Chcesz? (Daj Mi Spokój)',
        before: '/audio/shoshana-co-chcesz-raw.mp3',
        after: '/audio/shoshana-co-chcesz-master.mp3',
      },
      {
        title: 'Tak Smutnego',
        before: '/audio/shoshana-tak-smutnego-raw.mp3',
        after: '/audio/shoshana-tak-smutnego-master.mp3',
      },
      {
        title: 'W Szare Dni',
        before: '/audio/shoshana-w-szare-dni-raw.mp3',
        after: '/audio/shoshana-w-szare-dni-master.mp3',
      },
      {
        title: 'Elka',
        before: '/audio/shoshana-elka-raw.mp3',
        after: '/audio/shoshana-elka-master.mp3',
      },
    ],
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
    tracks: [
      {
        title: 'Live Performance',
        before: '/audio/shoshana-live-at-the-basement-before.mp3',
        after: '/audio/shoshana-live-at-the-basement-after.mp3',
      },
    ],
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
    tracks: [
      {
        title: 'Eclectic Delusion',
        before: '/audio/sougorshee-eclectic-delusion-before.mp3',
        after: '/audio/sougorshee-eclectic-delusion-after.mp3',
      },
    ],
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
    tracks: [
      {
        title: 'Dog Heading Back Home',
        before: '/audio/sougorshee-dog-heading-back-home-before.mp3',
        after: '/audio/sougorshee-dog-heading-back-home-after.mp3',
      },
    ],
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

type AudioPlayerContextType = {
  activePlayerId: string | null;
  setActivePlayerId: (id: string | null) => void;
};

const AudioPlayerContext = React.createContext<AudioPlayerContextType>({
  activePlayerId: null,
  setActivePlayerId: () => {},
});

function AudioPlayerProvider({ children }: { children: React.ReactNode }) {
  const [activePlayerId, setActivePlayerId] = useState<string | null>(null);

  return (
    <AudioPlayerContext.Provider value={{ activePlayerId, setActivePlayerId }}>
      {children}
    </AudioPlayerContext.Provider>
  );
}

function TrackPlayer({
  trackId,
  trackTitle,
  beforeSrc,
  afterSrc,
}: {
  trackId: string;
  trackTitle: string;
  beforeSrc: string;
  afterSrc: string;
}) {
  const { activePlayerId, setActivePlayerId } = React.useContext(AudioPlayerContext);
  const [version, setVersion] = useState<'before' | 'after'>('before');
  const audioRef = useRef<HTMLAudioElement>(null);
  const isActive = activePlayerId === trackId;

  useEffect(() => {
    if (!isActive && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isActive]);

  const handlePlay = () => {
    setActivePlayerId(trackId);
  };

  const handlePause = () => {
    setActivePlayerId(null);
  };

  const toggleVersion = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const wasPlaying = !audioRef.current.paused;

      setVersion(version === 'before' ? 'after' : 'before');

      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.load();
          audioRef.current.currentTime = currentTime;
          if (wasPlaying) {
            audioRef.current.play().catch(() => {});
          }
        }
      }, 50);
    } else {
      setVersion(version === 'before' ? 'after' : 'before');
    }
  };

  const currentSrc = version === 'before' ? beforeSrc : afterSrc;

  return (
    <div className="border border-neutral-800 bg-neutral-950/40 p-3">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
          {trackTitle}
        </span>

        <div className="flex gap-1">
          <button
            onClick={toggleVersion}
            className={`border px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider transition-all ${
              version === 'before'
                ? 'border-white bg-white text-black'
                : 'border-neutral-700 text-neutral-500 hover:border-neutral-600 hover:text-neutral-400'
            }`}
          >
            Before
          </button>
          <button
            onClick={toggleVersion}
            className={`border px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider transition-all ${
              version === 'after'
                ? 'border-white bg-white text-black'
                : 'border-neutral-700 text-neutral-500 hover:border-neutral-600 hover:text-neutral-400'
            }`}
          >
            After
          </button>
        </div>
      </div>

      <audio
        ref={audioRef}
        className="h-8 w-full"
        controls
        preload="metadata"
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handlePause}
      >
        <source src={currentSrc} type="audio/mpeg" />
      </audio>
    </div>
  );
}

function WorkCard({ work, index }: { work: WorkProject; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const workId = `${work.artist}-${work.title}`;

  const truncateDescription = (text: string, maxLength: number = 120) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <motion.div
      className="overflow-hidden border border-neutral-800 bg-black/40"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      {/* Collapsed Header */}
      <button onClick={() => setIsExpanded(!isExpanded)} className="w-full">
        <div className="grid gap-4 p-5 transition-colors hover:bg-neutral-950/30 md:grid-cols-[140px_1fr] md:p-6 lg:grid-cols-[160px_1fr]">
          {/* Cover */}
          <div className="aspect-square overflow-hidden border border-neutral-800 bg-neutral-950">
            <img
              src={work.cover}
              alt={`${work.artist} - ${work.title} cover`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Header Content */}
          <div className="flex min-w-0 flex-col justify-between">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="border border-neutral-700 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                  {work.format}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-600">
                  {work.year}
                </span>
              </div>

              <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                {work.artist}
              </p>
              <h3 className="mb-2 text-lg font-light text-white md:text-xl truncate">
                {work.title}
              </h3>
            </div>

            <p className="text-left text-xs leading-5 text-neutral-500 md:text-sm">
              {truncateDescription(work.description)}
            </p>
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-neutral-800 bg-neutral-950/40"
          >
            <div className="space-y-6 p-5 md:p-6">
              {/* Full Description */}
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-neutral-600">
                  Role
                </p>
                <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                  {work.role}
                </p>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-400 md:text-base">
                  {work.description}
                </p>
              </div>

              {/* Tracks */}
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-neutral-600">
                  Tracklist
                </p>
                <div className="space-y-3">
                  {work.tracks.map((track, trackIndex) => (
                    <TrackPlayer
                      key={`${workId}-track-${trackIndex}`}
                      trackId={`${workId}-track-${trackIndex}`}
                      trackTitle={track.title}
                      beforeSrc={track.before}
                      afterSrc={track.after}
                    />
                  ))}
                </div>
              </div>

              {/* Edits Checklist */}
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-neutral-600">
                  What Changed
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

              {/* Links */}
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-neutral-600">
                  Find It
                </p>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Works() {
  return (
    <AudioPlayerProvider>
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
              the finished work lives. Click any card to explore details and listen.
            </p>
          </motion.div>

          <div className="space-y-4 md:space-y-5">
            {works.map((work, index) => (
              <WorkCard key={`${work.artist}-${work.title}`} work={work} index={index} />
            ))}
          </div>
        </div>
      </section>
    </AudioPlayerProvider>
  );
}
