// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  image?: string;
  technologies?: string[];
}

// Testimonial Types
export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  rating?: number;
}

// Skill Types
export interface Skill {
  name: string;
  category: 'web-design' | 'development' | 'security';
}

// Professional Experience Types
export interface Experience {
  company: string;
  role: string;
  period?: string;
  description?: string;
}

// Navigation Types
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

// Component Props Types
export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export interface CardProps {
  className?: string;
  children: React.ReactNode;
}
