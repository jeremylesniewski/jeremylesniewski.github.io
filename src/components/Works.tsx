'use client';
import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const works = [
  {
    id: 1,
    artist: 'Shoshana',
    title: 'W Szarym Mieście',
    subtitle: '[CD Master]',
    role: 'Recording Engineer / Mix',
    year: '2025',
    type: 'Full-length',
    tracks: ['Intro', 'Wrastam', 'Mam Dość', 'Co Chcesz? (Daj Mi Spokój)', 'Tak Smutnego', 'W Szare Dni', 'Elka', 'Blask Gwiazd (L.A)', 'Outro'],
    description:
      "Full-length CD master for Shoshana — a grunge/alternative band from Szczecin. Tracked, edited and mixed. The Polish-language record is the band's most complete and fully produced statement.",
    link: 'https://voiaudio.bandcamp.com/album/w-szarym-mie-cie-cd-master',
    art: 'https://f4.bcbits.com/img/a4244274974_10.jpg',
    accent: '#7a4e28',
    pill: '#c8966a',
    bg: '#110900',
  },
  {
    id: 2,
    artist: 'Shoshana',
    title: 'Live At The Basement',
    subtitle: '',
    role: 'Recording Engineer / Mix',
    year: '2023',
    type: 'Live EP',
    tracks: ['',''],
    description:
      'Live session EP capturing Shoshana raw in the rehearsal room. Tracked live with minimal overdubs — energy is the point. ~17k Spotify streams.',
    link: 'https://voiaudio.bandcamp.com/album/live-at-the-basement',
    art: 'https://f4.bcbits.com/img/a1092665623_10.jpg',
    accent: '#2a4a2a',
    pill: '#6aaa6a',
    bg: '#060e06',
  },
  {
    id: 3,
    artist: 'SOUGORSHEE',
    title: 'Eclectic Delusion',
    subtitle: 'EP',
    role: 'Songwriter · Engineer · Multi-instrumentalist',
    year: '2024',
    type: 'EP · 4 tracks',
    tracks: ['Kitty Be (Instrumental)', 'Information', 'Nigdy Nie Walczyłem', '68th Jam'],
    description:
      'Debut SOUGORSHEE release. Recorded in a cramped dim basement in 2022 — out of thousands of hours of jams, four tracks made the cut. Alternative / psychedelic basement aesthetic.',
    link: 'https://voiaudio.bandcamp.com/album/eclectic-delusion-ep',
    art: 'https://f4.bcbits.com/img/a4258876001_10.jpg',
    accent: '#3a2a5a',
    pill: '#9a80cc',
    bg: '#07040f',
  },
  {
    id: 4,
    artist: 'SOUGORSHEE',
    title: 'Dog Heading Back Home',
    subtitle: '(2023 Sessions)',
    role: 'Songwriter · Engineer · Multi-instrumentalist',
    year: '2023',
    type: 'Sessions',
    tracks: ['2023 basement recordings'],
    description:
      "Second SOUGORSHEE release — 2023 basement sessions. Same raw philosophy: capture what's happening in the room, pick the best moments.",
    link: 'https://voiaudio.bandcamp.com/album/dog-heading-back-home-2023-sessions',
    art: 'https://f4.bcbits.com/img/a4060017996_10.jpg',
    accent: '#4a2a18',
    pill: '#b07848',
    bg: '#0c0604',
  },
];

function AlbumCover({ work, size }: { work: (typeof works)[0]; size: number }) {
  const [imgError, setImgError] = useState(false);

  if (work.art && !imgError) {
    return (
      <div style={{ width: size, height: size, overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={work.art}
          alt={`${work.artist} — ${work.title}`}
          onError={() => setImgError(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        background: work.bg,
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(ellipse at 38% 28%, ${work.accent}cc 0%, transparent 60%)` }} />
      <div style={{ position: 'relative', textAlign: 'center', padding: '0 16px' }}>
        <p
          className="font-mono uppercase"
          style={{ fontSize: Math.max(8, size * 0.032), color: work.pill, letterSpacing: '0.2em', marginBottom: 8, opacity: 0.65 }}
        >
          {work.artist}
        </p>
        <p
          className="font-sans"
          style={{ fontSize: Math.max(11, size * 0.054), color: 'rgba(255,255,255,0.85)', fontWeight: 300, lineHeight: 1.25 }}
        >
          {work.title}
        </p>
        {work.subtitle && (
          <p
            className="font-mono"
            style={{ fontSize: Math.max(8, size * 0.028), color: 'rgba(255,255,255,0.28)', marginTop: 6, letterSpacing: '0.08em' }}
          >
            {work.subtitle}
          </p>
        )}
      </div>
      <p
        className="font-mono"
        style={{ position: 'absolute', bottom: 10, right: 12, fontSize: Math.max(7, size * 0.027), color: 'rgba(255,255,255,0.16)', letterSpacing: '0.1em' }}
      >
        {work.year}
      </p>
    </div>
  );
}

export default function SelectedWork() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragDelta = useRef(0);
  const total = works.length;

  const prev = useCallback(() => { setSelectedId(null); setActiveIndex((i) => (i - 1 + total) % total); }, [total]);
  const next = useCallback(() => { setSelectedId(null); setActiveIndex((i) => (i + 1) % total); }, [total]);

  const onMouseDown = (e: React.MouseEvent) => { setIsDragging(false); dragStartX.current = e.clientX; dragDelta.current = 0; };
  const onMouseMove = (e: React.MouseEvent) => { dragDelta.current = e.clientX - dragStartX.current; if (Math.abs(dragDelta.current) > 8) setIsDragging(true); };
  const onMouseUp = () => { if (Math.abs(dragDelta.current) > 60) { dragDelta.current < 0 ? next() : prev(); } setTimeout(() => setIsDragging(false), 0); };
  const onTouchStart = (e: React.TouchEvent) => { dragStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => { const d = e.changedTouches[0].clientX - dragStartX.current; if (Math.abs(d) > 60) { d < 0 ? next() : prev(); } };

  const slot = (index: number) => {
    const offset = ((index - activeIndex) % total + total) % total;
    const pos = offset <= total / 2 ? offset : offset - total;
    const abs = Math.abs(pos);
    return {
      x: pos * 290,
      scale: abs === 0 ? 1 : abs === 1 ? 0.7 : 0.48,
      opacity: abs === 0 ? 1 : abs === 1 ? 0.45 : abs === 2 ? 0.15 : 0,
      zIndex: abs === 0 ? 10 : abs === 1 ? 5 : 1,
    };
  };

  const active = works[activeIndex];
  const selected = works.find((w) => w.id === selectedId);

  return (
    <section id="work" className="section-padding border-t border-neutral-800">
      <div className="container-max">

        {/* header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-px bg-neutral-500" />
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Work</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-sans text-white" style={{ fontWeight: 300, letterSpacing: '-0.02em' }}>
            Releases
          </h2>
          <p className="font-mono text-xs text-neutral-600 mt-4" style={{ letterSpacing: '0.06em' }}>
            drag · click to open
          </p>
        </motion.div>

        {/* carousel */}
        <div
          style={{ position: 'relative', height: 360, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {works.map((work, index) => {
            const { x, scale, opacity, zIndex } = slot(index);
            const isCentre = index === activeIndex;
            return (
              <motion.div
                key={work.id}
                animate={{ x, scale, opacity }}
                transition={{ type: 'spring', stiffness: 270, damping: 30 }}
                style={{ position: 'absolute', zIndex, cursor: isCentre ? 'pointer' : 'default' }}
                onClick={() => {
                  if (isDragging) return;
                  if (!isCentre) { setSelectedId(null); setActiveIndex(index); return; }
                  setSelectedId(work.id === selectedId ? null : work.id);
                }}
                whileHover={isCentre ? { scale: scale * 1.03 } : {}}
              >
                <div style={{ position: 'relative' }}>
                  <AlbumCover work={work} size={270} />
                  {isCentre && (
                    <div style={{ position: 'absolute', bottom: -14, left: '15%', right: '15%', height: 32, background: work.accent, filter: 'blur(20px)', opacity: 0.3, borderRadius: '50%', zIndex: -1 }} />
                  )}
                </div>
                {isCentre && (
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginTop: 18 }}>
                    <p className="font-mono uppercase text-xs" style={{ color: work.pill, letterSpacing: '0.18em', opacity: 0.7, marginBottom: 4 }}>
                      {work.artist}
                    </p>
                    <p className="font-sans text-neutral-300" style={{ fontWeight: 300, fontSize: 15, letterSpacing: '-0.01em' }}>
                      {work.title}
                      {work.subtitle && (
                        <span className="font-mono text-neutral-600" style={{ fontSize: 11, marginLeft: 6 }}>{work.subtitle}</span>
                      )}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* nav */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <button
            onClick={prev}
            className="font-sans text-neutral-600 border border-neutral-800 hover:border-neutral-500 hover:text-neutral-300 transition-colors"
            style={{ width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, background: 'none', lineHeight: 1 }}
          >
            ‹
          </button>
          <div className="flex items-center gap-2">
            {works.map((_, i) => (
              <button
                key={i}
                onClick={() => { setSelectedId(null); setActiveIndex(i); }}
                style={{ width: i === activeIndex ? 24 : 5, height: 5, borderRadius: 3, border: 'none', background: i === activeIndex ? active.pill : '#262626', cursor: 'pointer', transition: 'all 0.35s ease', padding: 0 }}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="font-sans text-neutral-600 border border-neutral-800 hover:border-neutral-500 hover:text-neutral-300 transition-colors"
            style={{ width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, background: 'none', lineHeight: 1 }}
          >
            ›
          </button>
        </div>

        {/* detail panel */}
        <AnimatePresence>
          {selected && (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.38, ease: [0.33, 0.66, 0.66, 1] }}
              style={{ marginTop: 48, position: 'relative', border: `1px solid ${selected.accent}55`, overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${selected.pill}44, transparent)` }} />
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(140deg, ${selected.accent}12 0%, transparent 50%)`, pointerEvents: 'none' }} />

              <div
                style={{
                  padding: 'clamp(20px, 4vw, 40px)',
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: 'clamp(16px, 3vw, 36px)',
                  alignItems: 'start',
                  position: 'relative',
                }}
              >
                <AlbumCover work={selected} size={96} />

                <div>
                  {/* meta row */}
                  <div className="flex items-center gap-3 flex-wrap mb-4">
                    <span
                      className="font-mono uppercase"
                      style={{ fontSize: 9, color: selected.pill, letterSpacing: '0.2em', border: `1px solid ${selected.accent}77`, padding: '2px 7px' }}
                    >
                      {selected.type}
                    </span>
                    <span className="font-mono text-neutral-700" style={{ fontSize: 9, letterSpacing: '0.1em' }}>{selected.year}</span>
                  </div>

                  <p className="font-mono uppercase" style={{ fontSize: 9, color: selected.pill, letterSpacing: '0.18em', opacity: 0.65, marginBottom: 4 }}>
                    {selected.artist}
                  </p>
                  <h3 className="font-sans text-white" style={{ fontWeight: 300, fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', letterSpacing: '-0.02em', marginBottom: 4 }}>
                    {selected.title}
                    {selected.subtitle && (
                      <span className="font-mono text-neutral-700" style={{ fontSize: '0.4em', marginLeft: 10, letterSpacing: '0.06em', fontWeight: 400 }}>
                        {selected.subtitle}
                      </span>
                    )}
                  </h3>
                  <p className="font-mono text-neutral-700 uppercase mb-4" style={{ fontSize: 9, letterSpacing: '0.1em' }}>
                    {selected.role}
                  </p>

                  <p className="font-sans text-neutral-500 mb-6" style={{ fontSize: 14, lineHeight: 1.75, maxWidth: 500 }}>
                    {selected.description}
                  </p>

                  {/* tracklist */}
                  <div className="mb-6">
                    <p className="font-mono text-neutral-700 uppercase mb-2" style={{ fontSize: 8, letterSpacing: '0.18em' }}>Tracklist</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      {selected.tracks.map((t, i) => (
                        <div key={i} className="flex gap-3">
                          <span className="font-mono text-neutral-700" style={{ fontSize: 10, minWidth: 20 }}>{String(i + 1).padStart(2, '0')}.</span>
                          <span className="font-mono text-neutral-500" style={{ fontSize: 11 }}>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* actions */}
                  <div className="flex items-center gap-4 flex-wrap">
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono uppercase transition-colors"
                      style={{
                        fontSize: 9,
                        color: selected.pill,
                        letterSpacing: '0.15em',
                        border: `1px solid ${selected.accent}77`,
                        padding: '6px 12px',
                        display: 'inline-block',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = `${selected.accent}33`; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                    >
                      Listen on Bandcamp ↗
                    </a>
                    <button
                      onClick={() => setSelectedId(null)}
                      className="font-mono uppercase text-neutral-700 hover:text-neutral-400 transition-colors"
                      style={{ fontSize: 9, background: 'none', border: 'none', letterSpacing: '0.15em', padding: 0, cursor: 'pointer' }}
                    >
                      close ×
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}