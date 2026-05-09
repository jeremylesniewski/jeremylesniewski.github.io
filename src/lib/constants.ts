// Global constants and configuration

export const SITE_CONFIG = {
  name: 'Jeremy Lesniewski',
  title: 'Jeremy Lesniewski - Music Production, Recording & Sound Design | Berlin',
  description:
    'Berlin-based music production, recording sessions, mixing, mastering, custom band projects, and sound design tools.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jeremylesniewski.github.io',
  author: 'Jeremy Lesniewski',
  email: 'jeremy@neecratch.com',
  location: 'Berlin',
};

export const NAVIGATION_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Studio', href: '#studio' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Booking', href: '#contact' },
  { label: 'Tools', href: '#tools' },
];

export const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    url: 'https://instagram.com/neecratch',
    platform: 'instagram',
  },
  {
    label: 'SoundCloud',
    url: 'https://soundcloud.com/neecratch',
    platform: 'soundcloud',
  },
];

export const FOOTER_LINKS = {
  navigation: [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Studio', href: '#studio' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Tools', href: '#tools' },
  ],
  contact: [
    { label: 'Email', href: 'mailto:jeremy@neecratch.com' },
    { label: 'Instagram', href: 'https://instagram.com/neecratch' },
    { label: 'Booking', href: '#contact' },
    { label: 'Berlin', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Impressum', href: '/impressum' },
  ],
};

// Animation configurations
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.9,
  },
  easing: {
    smooth: [0.33, 0.66, 0.66, 1],
    subtle: [0.25, 0.46, 0.45, 0.94],
    bounce: [0.34, 1.56, 0.64, 1],
  },
};

// Breakpoints (must match tailwind.config.ts)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const KEYWORDS = [
  'music production',
  'recording studio',
  'recording session',
  'mixing',
  'mastering',
  'sound design',
  'custom bands',
  'VST tools',
  'Berlin',
];
