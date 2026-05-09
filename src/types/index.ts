// Common types used across the application

export interface Artist {
  id: string;
  name: string;
  genre?: string[];
  description?: string;
  image?: string;
}

export interface WorkItem {
  id: string;
  title: string;
  artist: string;
  category:
    | 'Recording'
    | 'Mixing'
    | 'Mastering'
    | 'Production'
    | 'Custom Project'
    | 'Sound Design';
  tags: string[];
  year: number;
  description?: string;
  credits?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  date?: string;
  message: string;
  references?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  id?: string;
}

export interface SiteMetadata {
  siteUrl: string;
  title: string;
  description: string;
  author: string;
  email: string;
  location: string;
}
