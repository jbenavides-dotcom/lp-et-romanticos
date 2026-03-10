import type { ReactNode } from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Experience {
  icon: ReactNode | string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
  sublabel: string;
}

export interface SearchTag {
  text: string;
}

export interface CabinFeature {
  text: string;
}

export interface PerfectForItem {
  emoji: string;
  label: string;
}

export interface DistancePoint {
  icon: string;
  text: string;
}

export interface PrivacyPoint {
  text: string;
}
