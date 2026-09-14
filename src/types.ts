export interface SkillItem {
  name: string;
  level: string;
  description: string;
  category: 'programming' | 'data_ai' | 'web_systems' | 'tooling';
}

export interface SkillCluster {
  id: string;
  title: string;
  layer: string;
  icon: string;
  color: string;
  borderColor: string;
  skills: {
    name: string;
    level: string;
    detail: string;
  }[];
}

export interface Milestone {
  phase: string;
  title: string;
  description: string;
  status?: 'active' | 'completed' | 'upcoming';
}

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  category: string;
  statusText: string;
  image?: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  metrics?: { label: string; value: string }[];
}

export interface CertificationData {
  id: string;
  title: string;
  subtitle: string;
  issuer: string;
  badgeText: string;
  badgeVariant: 'primary' | 'secondary' | 'tertiary';
  icon: string;
  description: string;
  credentialId: string;
  skills: string[];
  date: string;
}

export interface MessageSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
