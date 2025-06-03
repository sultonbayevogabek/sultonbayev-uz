import type { LucideIcon } from 'lucide-react';
import { Code, Globe, Laptop, Paintbrush, Smartphone, Wrench } from 'lucide-react';

export interface Service {
   id: number;
   title: string;
   description: string;
   price: {
      amount: number
      startingFrom?: boolean
      per?: string
   };
   icon: LucideIcon;
   features: string[];
}

export const services: Service[] = [
   {
      id: 1,
      title: 'Website Development',
      description: 'Custom website development with modern technologies and responsive design.',
      price: {
         amount: 1200,
         startingFrom: true
      },
      icon: Globe,
      features: [
         'Custom design and development',
         'Responsive for all devices',
         'SEO-friendly structure',
         'Up to 5 pages',
         'Contact form integration',
         'Basic SEO setup',
         '2 rounds of revisions'
      ]
   },
   {
      id: 2,
      title: 'UI/UX Design',
      description: 'Professional user interface and experience design for web applications.',
      price: {
         amount: 800,
         startingFrom: true
      },
      icon: Paintbrush,
      features: [
         'User research and analysis',
         'Wireframing and prototyping',
         'Interactive mockups',
         'User flow optimization',
         'Responsive design',
         'Design system creation',
         '3 rounds of revisions'
      ]
   },
   {
      id: 3,
      title: 'Frontend Development',
      description: 'Implementation of modern, responsive frontend with Angular or other frameworks.',
      price: {
         amount: 30,
         per: 'hour'
      },
      icon: Code,
      features: [
         'Angular/React/Vue implementation',
         'Responsive layouts',
         'Cross-browser compatibility',
         'Performance optimization',
         'Component-based architecture',
         'Integration with APIs',
         'Code documentation'
      ]
   },
   {
      id: 4,
      title: 'Web Application',
      description: 'Full-featured web application development with frontend and backend integration.',
      price: {
         amount: 3500,
         startingFrom: true
      },
      icon: Laptop,
      features: [
         'Custom web application',
         'User authentication',
         'Database integration',
         'API development',
         'Frontend implementation',
         'Admin dashboard',
         '1 month of support'
      ]
   },
   {
      id: 5,
      title: 'Responsive Design',
      description: 'Make your existing website fully responsive across all devices and screen sizes.',
      price: {
         amount: 600,
         startingFrom: true
      },
      icon: Smartphone,
      features: [
         'Mobile-first approach',
         'Tablet and desktop optimization',
         'Cross-browser testing',
         'Performance optimization',
         'Accessibility improvements',
         'CSS framework implementation',
         '1 week of support'
      ]
   },
   {
      id: 6,
      title: 'Website Maintenance',
      description: 'Ongoing maintenance and support for your website or web application.',
      price: {
         amount: 300,
         per: 'month'
      },
      icon: Wrench,
      features: [
         'Regular updates and backups',
         'Security monitoring',
         'Bug fixes and troubleshooting',
         'Performance optimization',
         'Content updates (2 hours/month)',
         'Technical support',
         'Monthly reporting'
      ]
   }
];
