import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  link?: string;
  stats?: string;
  image?: string;
}

export interface Service {
  title: string;
  items: string[];
  icon: LucideIcon;
  color: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface CertificationCategory {
  category: string;
  items: Certification[];
}

export interface ToolCategory {
  category: string;
  skills: string[];
}