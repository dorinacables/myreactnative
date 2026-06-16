export interface Skill {
  name: string;
  level: 'expert' | 'advanced' | 'intermediate';
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  status: 'completed' | 'in-progress' | 'featured';
  imageUrl: string;
  imagePosition: string;
}

export const portfolioProfile = {
  name: 'Dorina Cables',
  initials: 'DC',
  tagline: 'BSIT Student in Business Analytics, building practical systems from data and code.',
  bio: 'I am a 3rd year BSIT student majoring in Business Analytics. My work focuses on school-based systems, data-driven features, and responsive mobile or web interfaces using modern development tools.',
  focus: '3rd Year BSIT Student | Business Analytics Major',
};

export const frontendSkills: Skill[] = [
  { name: 'React Native', level: 'expert', icon: '⚛️' },
  { name: 'TypeScript', level: 'expert', icon: '🔷' },
  { name: 'HTML', level: 'expert', icon: '🧱' },
  { name: 'CSS', level: 'advanced', icon: '🎨' },
  { name: 'JavaScript', level: 'expert', icon: '✨' },
];

export const backendSkills: Skill[] = [
  { name: 'PHP', level: 'advanced', icon: '🐘' },
  { name: 'Java', level: 'advanced', icon: '☕' },
  { name: 'Python', level: 'advanced', icon: '🐍' },
  { name: 'C++', level: 'intermediate', icon: '💻' },
  { name: 'SQL', level: 'advanced', icon: '🗄️' },
];

export const toolsSkills: Skill[] = [
  { name: 'GitHub', level: 'expert', icon: '🐙' },
  { name: 'VS Code', level: 'expert', icon: '🧰' },
  { name: 'NetBeans', level: 'advanced', icon: '🧪' },
  { name: 'Expo', level: 'advanced', icon: '📦' },
  { name: 'Firebase', level: 'intermediate', icon: '🔥' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'A Predictive Malnutrition and Community Health Risk Detection System',
    description:
      'A decision-support tool that highlights households at risk using community health indicators for early intervention and planning.',
    tech: ['Python', 'SQL', 'PHP', 'Data Analysis'],
    status: 'featured',
    imageUrl: 'https://images.unsplash.com/photo-1576765607973-42a8d6f7c1f6?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center top',
  },
  {
    id: '2',
    title: 'Trash Collection Management System',
    description:
      'A collection tracking platform for scheduling routes, monitoring pickups, and improving sanitation coordination.',
    tech: ['PHP', 'JavaScript', 'SQL'],
    status: 'completed',
    imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center center',
  },
  {
    id: '3',
    title: 'Restaurant Reservation System',
    description:
      'A reservation workflow for table booking, schedule management, and customer request handling with a clean flow.',
    tech: ['React', 'PHP', 'SQL'],
    status: 'completed',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center center',
  },
  {
    id: '4',
    title: 'Disaster Relief Information Management System',
    description:
      'An information management system for recording relief distribution, beneficiary data, and emergency response coordination.',
    tech: ['Java', 'SQL', 'System Design'],
    status: 'completed',
    imageUrl: 'https://images.unsplash.com/photo-1584931423298-c576fda54bd4?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center top',
  },
  {
    id: '5',
    title: 'Dormitory and Enrollment Information Management Systems',
    description:
      'School-based systems for dormitory records, enrollment processing, and academic information handling built for campus use.',
    tech: ['Java', 'PHP', 'MySQL'],
    status: 'completed',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center top',
  },
  {
    id: '6',
    title: 'Charity Donation Management System',
    description:
      'A donation management platform for handling contributions, beneficiary requests, and community outreach records.',
    tech: ['React Native', 'Firebase', 'JavaScript'],
    status: 'completed',
    imageUrl: 'https://images.unsplash.com/photo-1559027615-28ec0f1a0f08?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center center',
  },
  {
    id: '7',
    title: 'Barangay Information Management System',
    description:
      'A local government system for resident records, document requests, and service monitoring in a barangay setting.',
    tech: ['PHP', 'SQL', 'JavaScript'],
    status: 'completed',
    imageUrl: 'https://images.unsplash.com/photo-1528747045269-390fe33c19f2?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center center',
  },
  {
    id: '8',
    title: 'Bread and Pastry Shop Management System',
    description:
      'A shop management system for inventory, product listing, orders, and sales tracking for a bakery workflow.',
    tech: ['PHP', 'MySQL', 'HTML/CSS'],
    status: 'completed',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center center',
  },
  {
    id: '9',
    title: 'Autoparts Inventory System',
    description:
      'An inventory system for managing auto parts stock, item lookup, supplier records, and restocking activity.',
    tech: ['Java', 'SQL', 'Inventory Logic'],
    status: 'completed',
    imageUrl: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center center',
  },
  {
    id: '10',
    title: 'Garden Management System',
    description:
      'A monitoring system for plant care schedules, garden inventory, and maintenance records for organized upkeep.',
    tech: ['Python', 'SQL', 'System Design'],
    status: 'completed',
    imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center center',
  },
  {
    id: '11',
    title: 'BSU Enrollment Information Management System',
    description:
      'A campus enrollment platform for student registration, course encoding, and record management for BSU workflows.',
    tech: ['Java', 'PHP', 'SQL'],
    status: 'completed',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center center',
  },
  {
    id: '12',
    title: 'Event Management System',
    description:
      'A system for event scheduling, participant records, and program coordination from planning to execution.',
    tech: ['React Native', 'Firebase', 'JavaScript'],
    status: 'completed',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center center',
  },
];