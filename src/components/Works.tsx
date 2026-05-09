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
    link: 'https://voiaudio.bandcamp.com',
    art: 'https://f4.bcbits.com/img/0040158559_23.jpg',
    accentColor: '#7a4e28',
    labelColor: '#c8966a',
    bgFallback: '#110900',
  },
  {
    id: 2,
    artist: 'Shoshana',
    title: 'Live At The Basement',
    subtitle: '',
    role: 'Recording Engineer / Mix',
    year: '2023',
    type: 'Live EP',
    tracks: ['Hug Me Away', 'Bloody Eyes'],
    description:
      'Live session EP capturing Shoshana raw in the rehearsal room. Tracked live with minimal overdubs — energy is the point. ~17k Spotify streams.',
    link: 'https://voiaudio.bandcamp.com',
    art: null,
    accentColor: '#2a4a2a',
    labelColor: '#6aaa6a',
    bgFallback: '#060e06',
  },
  {
    id: 3,
    artist: 'SOUGORSHEE',
    title: 'Eclectic Delusion',
    subtitle: 'EP',
    role: 'Songwriter / Engineer / Multi-instrumentalist',
    year: '2024',
    type: 'EP · 4 tracks',
    tracks: ['Kitty Be (Instrumental)', 'Information', 'Nigdy Nie Walczyłem', '68th Jam'],
    description:
      'Debut SOUGORSHEE release. Recorded in a cramped dim basement in 2022 — out of thousands of hours of jams, four tracks made the cut. Alternative / psychedelic basement aesthetic.',
    link: 'https://sougorshee.bandcamp.com/album/eclectic-delusion-ep',
    art: 'https://f4.bcbits.com/img/a3374648314_5.jpg',
    accentColor: '#3a2a5a',
    labelColor: '#9a80cc',
    bgFallback: '#07040f',
  },
  {
    id: 4,
    artist: 'SOUGORSHEE',
    title: 'Dog Heading Back Home',
    subtitle: '(2023 Sessions)',
    role: 'Songwriter / Engineer / Multi-instrumentalist',
    year: '2023',
    type: 'Sessions',
    tracks: ['2023 basement recordings'],
    description:
      'Second SOUGORSHEE release — 2023 basement sessions. Same raw philosophy: capture what\'s happening in the room, pick the best moments.',
    link: 'https://voiaudio.bandcamp.com',
    art: null,
    accentColor: '#4a2a18',
    labelColor: '#b07848',
    bgFallback: '#0c0604',
  },
];

function AlbumCover({
  work,
  width = 270,
  height = 270,
}: {
  work: (typeof works)[0];
  width?: number;
  height?: number;
}) {
  const [imgError, setImgError] = useState(false);

  if (work.art && !imgError) {
    return (
      <div style={{ width, height, overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
        <img
          src={work.art}
          alt={`${work.artist} — ${work.title}`}
          onError={() => setImgError(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          crossOrigin="anonymous"
        />
      </div>
    );
  }

  // Generated fallback cover
  return (
    <div
      style={{
        width,
        height,
        background: work.bgFallback,
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(ellipse at 38% 28%, ${work.accentColor}cc 0%, transparent 60%)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 18px)',
        }}
      />
      <div style={{ position: 'relative', textAlign: 'center', padding: '0 18px' }}>
        <div
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: Math.max(9, width * 0.033),
            color: work.labelColor,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            marginBottom: 10,
            opacity: 0.65,
          }}
        >
          {work.artist}
        </div>
        <div
          style={{
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            fontSize: Math.max(11, width * 0.055),
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.25,
          }}
        >
          {work.title}
        </div>
        {work.subtitle && (
          <div
            style={{
              fontFamily: "'Courier New', monospace",
              fontStyle: 'normal',
              fontSize: Math.max(8, width * 0.028),
              color: 'rgba(255,255,255,0.3)',
              marginTop: 7,
              letterSpacing: '0.1em',
            }}
          >
            {work.subtitle}
          </div>
        )}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 11,
          right: 13,
          fontFamily: "'Courier New', monospace",
          fontSize: Math.max(7, width * 0.028),
          color: 'rgba(255,255,255,0.18)',
          letterSpacing: '0.1em',
        }}
      >
        {work.year}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 11,
          left: 13,
          fontFamily: "'Courier New', monospace",
          fontSize: Math.max(7, width * 0.025),
          color: 'rgba(255,255,255,0.12)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        {work.type}
      </div>
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

  const prev = useCallback(() => {
    setSelectedId(null);
    setActiveIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setSelectedId(null);
    setActiveIndex((i) => (i + 1) % total);
  }, [total]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(false);
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    dragDelta.current = e.clientX - dragStartX.current;
    if (Math.abs(dragDelta.current) > 8) setIsDragging(true);
  };
  const handleMouseUp = () => {
    if (Math.abs(dragDelta.current) > 60) {
      dragDelta.current < 0 ? next() : prev();
    }
    setTimeout(() => setIsDragging(false), 0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - dragStartX.current;
    if (Math.abs(delta) > 60) {
      delta < 0 ? next() : prev();
    }
  };

  const getSlotProps = (index: number) => {
    const offset = ((index - activeIndex) % total + total) % total;
    const pos = offset <= total / 2 ? offset : offset - total;
    const absPos = Math.abs(pos);
    const scale = absPos === 0 ? 1 : absPos === 1 ? 0.71 : 0.48;
    const opacity = absPos === 0 ? 1 : absPos === 1 ? 0.5 : absPos === 2 ? 0.18 : 0;
    const zIndex = absPos === 0 ? 10 : absPos === 1 ? 5 : 1;
    const x = pos * 280;
    return { x, scale, opacity, zIndex };
  };

  const selectedWork = works.find((w) => w.id === selectedId);
  const centreWork = works[activeIndex];

  return (
    <section
      id="work"
      className="section-padding border-t border-neutral-800"
      style={{ background: '#070707', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}
    >
      <div className="container-max" style={{ position: 'relative' }}>
        {/* header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 16, height: 1, background: '#363636' }} />
            <p
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: 10,
                color: '#3a3a3a',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              Work
            </p>
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 300,
              color: '#d8d8d8',
              letterSpacing: '-0.02em',
              margin: 0,
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
            }}
          >
            Releases
          </h2>
          <p
            style={{
              marginTop: 8,
              color: '#383838',
              fontFamily: "'Courier New', monospace",
              fontSize: 10,
              letterSpacing: '0.08em',
            }}
          >
            drag · click to open
          </p>
        </motion.div>

        {/* carousel */}
        <div
          style={{
            position: 'relative',
            height: 370,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {works.map((work, index) => {
            const { x, scale, opacity, zIndex } = getSlotProps(index);
            const isCentre = index === activeIndex;
            return (
              <motion.div
                key={work.id}
                animate={{ x, scale, opacity }}
                transition={{ type: 'spring', stiffness: 270, damping: 30 }}
                style={{ position: 'absolute', zIndex, cursor: isCentre ? 'pointer' : 'default' }}
                onClick={() => {
                  if (isDragging) return;
                  if (!isCentre) {
                    setSelectedId(null);
                    setActiveIndex(index);
                    return;
                  }
                  setSelectedId(work.id === selectedId ? null : work.id);
                }}
                whileHover={isCentre ? { scale: scale * 1.03 } : {}}
              >
                <div style={{ position: 'relative' }}>
                  <AlbumCover work={work} width={270} height={270} />
                  {/* glow */}
                  {isCentre && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: -16,
                        left: '15%',
                        right: '15%',
                        height: 36,
                        background: work.accentColor,
                        filter: 'blur(22px)',
                        opacity: 0.28,
                        borderRadius: '50%',
                        zIndex: -1,
                      }}
                    />
                  )}
                </div>

                {isCentre && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginTop: 20 }}
                  >
                    <p
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: 9,
                        color: work.labelColor,
                        margin: 0,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        opacity: 0.7,
                      }}
                    >
                      {work.artist}
                    </p>
                    <p
                      style={{
                        fontFamily: 'Georgia, serif',
                        fontStyle: 'italic',
                        color: '#c0c0c0',
                        fontSize: 15,
                        margin: '5px 0 0',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {work.title}
                      {work.subtitle && (
                        <span style={{ color: '#484848', fontSize: 11, marginLeft: 6, fontStyle: 'normal', fontFamily: "'Courier New', monospace" }}>
                          {work.subtitle}
                        </span>
                      )}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, marginTop: 60 }}>
          <button
            onClick={prev}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#484848'; e.currentTarget.style.color = '#888'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#3a3a3a'; }}
            style={{ background: 'none', border: '1px solid #222', color: '#3a3a3a', width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 17, transition: 'all 0.2s', fontFamily: 'Georgia, serif', lineHeight: 1 }}
          >
            ‹
          </button>
          <div style={{ display: 'flex', gap: 9, alignItems: 'center' }}>
            {works.map((w, i) => (
              <button
                key={i}
                onClick={() => { setSelectedId(null); setActiveIndex(i); }}
                style={{ width: i === activeIndex ? 26 : 5, height: 5, borderRadius: 3, border: 'none', background: i === activeIndex ? centreWork.labelColor : '#222', cursor: 'pointer', transition: 'all 0.35s ease', padding: 0 }}
              />
            ))}
          </div>
          <button
            onClick={next}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#484848'; e.currentTarget.style.color = '#888'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#3a3a3a'; }}
            style={{ background: 'none', border: '1px solid #222', color: '#3a3a3a', width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 17, transition: 'all 0.2s', fontFamily: 'Georgia, serif', lineHeight: 1 }}
          >
            ›
          </button>
        </div>

        {/* detail panel */}
        <AnimatePresence>
          {selectedWork && (
            <motion.div
              key={selectedWork.id}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.38, ease: [0.33, 0.66, 0.66, 1] }}
              style={{ marginTop: 48, position: 'relative', border: `1px solid ${selectedWork.accentColor}55`, overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${selectedWork.labelColor}55, transparent)` }} />
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(140deg, ${selectedWork.accentColor}14 0%, transparent 50%)`, pointerEvents: 'none' }} />

              <div
                style={{
                  padding: 'clamp(22px, 4vw, 40px)',
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: 'clamp(18px, 3vw, 36px)',
                  alignItems: 'start',
                  position: 'relative',
                }}
              >
                {/* small cover */}
                <AlbumCover work={selectedWork} width={100} height={100} />

                {/* content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
                    <span style={{ fontFamily: "'Courier New', monospace", fontSize: 9, color: selectedWork.labelColor, letterSpacing: '0.2em', textTransform: 'uppercase', border: `1px solid ${selectedWork.accentColor}77`, padding: '2px 7px' }}>
                      {selectedWork.type}
                    </span>
                    <span style={{ fontFamily: "'Courier New', monospace", fontSize: 9, color: '#383838', letterSpacing: '0.1em' }}>
                      {selectedWork.year}
                    </span>
                  </div>

                  <p style={{ fontFamily: "'Courier New', monospace", fontSize: 9, color: selectedWork.labelColor, letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 4px', opacity: 0.65 }}>
                    {selectedWork.artist}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontStyle: 'italic',
                      fontSize: 'clamp(1.2rem, 2.5vw, 1.9rem)',
                      fontWeight: 400,
                      color: '#ddd',
                      letterSpacing: '-0.02em',
                      margin: '0 0 4px',
                    }}
                  >
                    {selectedWork.title}
                  </h3>
                  {selectedWork.subtitle && (
                    <p style={{ fontFamily: "'Courier New', monospace", fontSize: 10, color: '#404040', margin: '0 0 14px', letterSpacing: '0.06em' }}>
                      {selectedWork.subtitle}
                    </p>
                  )}

                  <p style={{ fontFamily: "'Courier New', monospace", fontSize: 9, color: '#383838', margin: '0 0 14px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {selectedWork.role}
                  </p>

                  <p style={{ fontSize: 13, color: '#686868', lineHeight: 1.8, maxWidth: 500, margin: '0 0 18px', fontFamily: 'Georgia, serif' }}>
                    {selectedWork.description}
                  </p>

                  {/* tracklist */}
                  <div style={{ marginBottom: 20 }}>
                    <p style={{ fontFamily: "'Courier New', monospace", fontSize: 8, color: '#2e2e2e', letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 7px' }}>
                      Tracklist
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {selectedWork.tracks.map((t, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                          <span style={{ fontFamily: "'Courier New', monospace", fontSize: 9, color: '#2c2c2c', minWidth: 20 }}>
                            {String(i + 1).padStart(2, '0')}.
                          </span>
                          <span style={{ fontFamily: "'Courier New', monospace", fontSize: 11, color: '#505050' }}>
                            {t}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* actions */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                    <a
                      href={selectedWork.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={(e) => { e.currentTarget.style.background = `${selectedWork.accentColor}33`; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                      style={{ fontFamily: "'Courier New', monospace", fontSize: 9, color: selectedWork.labelColor, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', border: `1px solid ${selectedWork.accentColor}77`, padding: '6px 12px', transition: 'background 0.2s', display: 'inline-block' }}
                    >
                      Listen on Bandcamp ↗
                    </a>
                    <button
                      onClick={() => setSelectedId(null)}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#555'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#2c2c2c'; }}
                      style={{ fontFamily: "'Courier New', monospace", fontSize: 9, color: '#2c2c2c', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.15em', textTransform: 'uppercase', padding: 0, transition: 'color 0.2s' }}
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