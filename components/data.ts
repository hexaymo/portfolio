export type Project = {
  num: string; domain: string; title: string; summary: string; shot?: string; image?: string;
  role: string; context: string; points: string[]; stack: string[];
};
export type Job = { company: string; role: string; dates: string; current?: boolean; points: string[] };

export const PROJECTS: Project[] = [
  { num: '01', domain: 'Healthcare · ERP', image: '/images/HIS.jpg', title: 'Hospital Information System', summary: 'Migrating a legacy desktop hospital system to a modern, role-based web platform — from patient intake to pharmacy stock.', role: 'Technical lead & backend architect', context: 'Legacy desktop → web migration',
    points: ['Architected the platform on NestJS, Next.js and PostgreSQL, replacing a legacy desktop system.', 'Implemented RBAC, patient accounts, medical records, diagnostics, pharmacy stock and result management.', 'Designed the REST APIs, database schemas, testing strategy, documentation and deployment architecture.'],
    stack: ['NestJS', 'Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'Redis', 'Nginx', 'CI/CD'] },
  { num: '02', domain: 'Commerce · SaaS', image: '/images/cms.jpg', title: 'Multi-Tenant E-Commerce SaaS', summary: 'A platform for launching and running online stores — products, templates, subscriptions and custom domains, with data isolated per tenant.', role: 'Architecture & full-stack', context: 'Multi-tenant SaaS',
    points: ['Designed store creation and management with products, templates, subscriptions and custom domains.', 'Planned the multi-tenant architecture, PostgreSQL data isolation, authentication and payment integration.', 'Improved reliability through testing, observability, deployment and CI/CD practices.'],
    stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'PostgreSQL', 'Laravel', 'Inertia', 'Docker', 'Jenkins', 'CI/CD', 'Github actions'] },
  { num: '03', domain: 'Fintech · Mobile', image: '/images/tap_to_pay.webp', title: 'Tap-to-Pay Mobile App', summary: 'A React Native app that turns a phone into a contactless payment terminal, built at HeroPay.',role: 'Mobile engineer', context: 'HeroPay · 2025',
    points: ['Developed a React Native / Expo app for contactless Tap-to-Pay transactions.', 'Worked with NFC payment flows and integrated APIs to support secure transactions.', 'Improved app performance and partnered with backend teams on API integration.'],
    stack: ['React Native', 'Expo', 'NFC', 'TypeScript', 'REST'] },
  { num: '04', domain: 'IoT · Hackathon', image: '/images/smar.png', title: 'Smart Warehouse', summary: 'A real-time warehouse monitoring system built under hackathon pressure — one of many hackathons, two of them won.',role: 'Full-stack', context: 'Hackathon · 2× winner overall',
    points: ['Built sensor-to-dashboard messaging over MQTT with a Node.js backend.', 'Modelled inventory data in PostgreSQL with Prisma and shipped a React dashboard.'],
    stack: ['Node.js', 'React', 'PostgreSQL', 'Prisma', 'MQTT'] },
];

export const JOBS: Job[] = [
  { company: 'Exacode', role: 'Software Engineer', dates: 'Mar 2026 — Now', current: true, points: ['Designed and developed backend services with NestJS, PostgreSQL, Prisma, REST APIs and WebSockets.', 'Led technical architecture, documentation, testing and development of a healthcare information system.', 'Collaborated with frontend and backend engineers to deliver scalable, maintainable features.'] },
  { company: 'Alware', role: 'Software Engineer', dates: 'Jul 2025 — Jul 2026', points: ['Designed and developed backend services with NestJS, PostgreSQL, Prisma, REST APIs and WebSockets.', 'Led technical architecture, documentation, testing and development of a healthcare information system.', 'Collaborated with frontend and backend engineers to deliver scalable, maintainable features.'] },
  { company: 'HeroPay', role: 'Software Engineer', dates: 'Jan — Jun 2025', points: ['Developed a React Native / Expo app for contactless Tap-to-Pay transactions.', 'Worked with NFC payment flows and integrated APIs to support secure transactions.', 'Improved performance and collaborated with backend teams on API integration.'] },
  { company: 'Code IT DZ', role: 'Software Developer Intern', dates: 'Jun — Aug 2024', points: ['Developed an e-commerce / store management system using Django and Python.', 'Implemented backend features, database models and user-facing functionality.'] },
];

export const SKILLS = [
  { group: 'Languages & frameworks', items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'PHP', 'Node.js', 'NestJS', 'Express', 'React', 'Next.js', 'React Native', 'Laravel', 'Inertia', 'GraphQL', 'REST', 'WebSockets'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis', 'Prisma'] },
  { group: 'DevOps & tools', items: ['Docker', 'Kubernetes', 'Git', 'GitHub', 'Jenkins', 'Nginx', 'Linux', 'Postman', 'Figma'] },
];

export const FILTERS = ['All', 'NestJS', 'Laravel', 'PostgreSQL', 'React Native'];

export const CONTACT = {
  email: 'morsiyoucef.pro@gmail.com',
  github: 'https://github.com/MorsiYoucef',
  linkedin: 'https://www.linkedin.com/in/youcef-morsi-a7579a289/',
  phone: '+213794086004', phoneLabel: '0794 08 60 04',
};
