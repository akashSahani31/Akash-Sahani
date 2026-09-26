import { SkillCluster, Milestone, ProjectData, CertificationData } from '../types';

export const PERSONAL_INFO = {
  name: 'Akash Sahani',
  tagline: 'AI & DS • REVA',
  university: 'REVA University',
  degree: 'Bachelor of Technology (B.Tech)',
  major: 'Artificial Intelligence & Data Science',
  graduationYear: '2029',
  email: 'akashakash2859@gmail.com',
  linkedin: 'https://www.linkedin.com/in/akash-sahani-b72608386/',
  github: 'https://github.com/',
  leetcode: 'https://leetcode.com/problemset/',
  location: 'Bengaluru, India',
  profileImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCZCtn5nZ64J91jdQxjjS16VeR1pwdjP_8_Qj9p6UFq_Diw5WIchM1405ImZ7zTPJ6cU1XWdPIeI3fTuoqAlBVh0m5tA0jrhWL0cWlzmELYbfoV7ArKaxM9MGaEdC628LtCQtQs0pMmfSXbZIn_MH-3HVYKrQxuwEtnLGfh79y2FRvhd0-hXiddZWHSmi9rIbpM7bnRuH_02QPQxznW1bGUDpkaQQRCaAk3NtcQae1I4J0_zcL3rAh4s0cMctNh8TjnNQ',
  slopesenseImage:
    'https://lh3.googleusercontent.com/aida/AEtjO1V1ssw9qBHiV-_K-njInLy2fKDrJV1y4TWjKaH8xyB7rB1Cp0LQLfEvwKMgjqB1K7LwDXD8k2mzghAia7ulSPo0EbkaX66rfLWo_K63s-_qkCr7Lwxfb46ICxYM3CY90lONd014VCUxA9WFBXMVxkUXJjLCLVHHtd3hDHElbriHP4u2Ftrj9o_bAQRVsBvi-EBrxjoLLVafjxO6qqqXaTXWd5x-nbPFklsWlKjLvc8WzhzjN4zjOWlTA0M',
};

export const SPECIALIZATIONS = [
  { label: 'Predictive Modeling', color: 'text-on-surface' },
  { label: 'Geospatial AI', color: 'text-secondary' },
  { label: 'Computer Vision', color: 'text-tertiary' },
  { label: 'System Architecture', color: 'text-primary' },
];

export const MILESTONES: Milestone[] = [
  {
    phase: 'PHASE 01',
    title: 'Core Fundamentals',
    description: 'Structured programming in C, computational mathematics, and fundamental logic circuits.',
    status: 'completed',
  },
  {
    phase: 'PHASE 02',
    title: 'REVA B.Tech Launch',
    description: 'Formal curriculum in Artificial Intelligence, Data Science specialization, and Relational DBMS.',
    status: 'completed',
  },
  {
    phase: 'PHASE 03',
    title: 'ML & Applied AI',
    description: 'Supervised/unsupervised algorithms, exploratory data science pipelines with NumPy & Pandas.',
    status: 'completed',
  },
  {
    phase: 'PHASE 04',
    title: 'Smart India Hackathon',
    description: 'Architecting SlopeSense: Geospatial anomaly warning systems engineered for high-altitude disaster prevention.',
    status: 'active',
  },
  {
    phase: 'HORIZON 05',
    title: 'Research & Industry',
    description: 'Targeting 2026 enterprise AI engineering internships & high-impact multi-modal research roles.',
    status: 'upcoming',
  },
];

export const SKILL_CLUSTERS: SkillCluster[] = [
  {
    id: 'programming',
    title: 'Programming',
    layer: 'LAYER_01',
    icon: 'code',
    color: 'text-primary',
    borderColor: 'border-primary/20',
    skills: [
      { name: 'Python', level: 'Advanced', detail: 'Pandas, NumPy, Scikit-learn, SciPy, Matplotlib' },
      { name: 'C Language', level: 'Proficient', detail: 'Pointers, memory management, algorithmic data structures' },
      { name: 'SQL', level: 'Proficient', detail: 'Complex relational queries, indexing, joins, PostgreSQL' },
    ],
  },
  {
    id: 'data_ai',
    title: 'Data & AI',
    layer: 'LAYER_02',
    icon: 'cognition',
    color: 'text-secondary',
    borderColor: 'border-secondary/20',
    skills: [
      { name: 'Data Analysis & EDA', level: 'Core', detail: 'Statistical inference, feature engineering, imputation' },
      { name: 'Machine Learning', level: 'Applied', detail: 'Supervised/Unsupervised models, Random Forests, XGBoost' },
      { name: 'Data Visualization', level: 'Fluent', detail: 'Seaborn, interactive analytics dashboards, telemetry plots' },
    ],
  },
  {
    id: 'web_systems',
    title: 'Web & Systems',
    layer: 'LAYER_03',
    icon: 'web',
    color: 'text-tertiary',
    borderColor: 'border-tertiary/20',
    skills: [
      { name: 'HTML5 & Modern CSS', level: 'Fluent', detail: 'Semantic architecture, dynamic styling, responsive grids' },
      { name: 'JavaScript (ES6+)', level: 'Fluent', detail: 'Asynchronous APIs, event telemetry, DOM canvas rendering' },
      { name: 'Git & GitHub', level: 'Standard', detail: 'Branching strategies, CI/CD pipelines, collaborative review' },
    ],
  },
  {
    id: 'tooling',
    title: 'Lab & Tooling',
    layer: 'LAYER_04',
    icon: 'science',
    color: 'text-primary',
    borderColor: 'border-primary/20',
    skills: [
      { name: 'VS Code & Linux CLI', level: 'Daily', detail: 'Terminal automation, debugging environments, extensions' },
      { name: 'Jupyter Notebooks', level: 'Standard', detail: 'Reproducible research, notebook profiling, experiment logs' },
      { name: 'LLM Orchestration', level: 'Active', detail: 'Prompt engineering, API integration, agent workflows' },
    ],
  },
];

export const CERTIFICATIONS: CertificationData[] = [
  {
    id: 'wadhwani',
    title: 'Wadhwani Foundation Course',
    subtitle: 'Entrepreneurship & Tech Leadership',
    issuer: 'WADHWANI FOUNDATION',
    badgeText: 'COMPLETED',
    badgeVariant: 'primary',
    icon: 'lightbulb',
    description:
      'Strategic innovation methodology, business model canvas formulation, team dynamics, and technology incubation principles.',
    credentialId: 'WF-ENTR-2024-9182',
    skills: ['Strategic Innovation', 'Business Model Canvas', 'Tech Leadership', 'Team Incubation'],
    date: 'March 2024',
  },
  {
    id: 'ibm_dataviz',
    title: 'Data Visualization with Python',
    subtitle: 'IBM / Cognitive Class',
    issuer: 'IBM COGNITIVE CLASS',
    badgeText: 'IBM CERTIFIED',
    badgeVariant: 'secondary',
    icon: 'insights',
    description:
      'Specialized graphical synthesis: Matplotlib line/bar formatting, Seaborn statistical distributions, and geospatial maps.',
    credentialId: 'COG-DV-PY',
    skills: ['Matplotlib', 'Seaborn', 'Folium Geospatial', 'Statistical Plotting'],
    date: 'June 2024',
  },
  {
    id: 'ibm_python',
    title: 'Python 101 for Data Science',
    subtitle: 'Foundational Computing',
    issuer: 'IBM COGNITIVE CLASS',
    badgeText: 'VERIFIED',
    badgeVariant: 'tertiary',
    icon: 'data_object',
    description:
      'Fundamental Python data structures, functional paradigms, string manipulations, file I/O operations, and computational complexity.',
    credentialId: 'IBM-PY101-DS',
    skills: ['Data Structures', 'Functional Python', 'File I/O', 'Algorithm Complexity'],
    date: 'January 2024',
  },
  {
    id: 'ibm_analysis',
    title: 'Data Analysis with Python',
    subtitle: 'Statistical Pipelines & Scikit-learn',
    issuer: 'ACCREDITED PIPELINE',
    badgeText: 'ADVANCED',
    badgeVariant: 'primary',
    icon: 'analytics',
    description:
      'Data wrangling with Pandas, missing value treatments, normalization, multi-variable correlation, and model evaluation routines.',
    credentialId: 'IBM-DA-SKL-404',
    skills: ['Pandas Wrangling', 'Missing Value Imputation', 'Scikit-learn Pipelines', 'Model Scoring'],
    date: 'August 2024',
  },
];

export const RADAR_ITEMS = [
  {
    icon: 'smart_toy',
    status: 'ACTIVE LAB',
    title: 'Autonomous AI Agents',
    description:
      'Multi-step reasoning pipelines, tool invocation, and autonomous memory-augmented LLM architectures.',
    color: 'text-primary',
    tagColor: 'text-secondary',
  },
  {
    icon: 'memory',
    status: 'STUDYING',
    title: 'Edge AI & Telemetry',
    description:
      'Quantized lightweight inference on embedded microcontrollers for continuous outdoor field sensing.',
    color: 'text-secondary',
    tagColor: 'text-secondary',
  },
  {
    icon: 'public',
    status: 'PROTOTYPING',
    title: 'Geospatial Transformers',
    description:
      'Multispectral satellite imagery models for dynamic topography deformation and flood plane forecasting.',
    color: 'text-tertiary',
    tagColor: 'text-secondary',
  },
  {
    icon: 'speed',
    status: 'RESEARCH',
    title: 'High-Throughput Pipelines',
    description:
      'Kafka streaming ingestion, vector databases, and sub-second retrieval pipelines for enterprise datasets.',
    color: 'text-primary',
    tagColor: 'text-secondary',
  },
];
