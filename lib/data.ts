import type { LucideIcon } from 'lucide-react';
import { Code, Globe, Laptop, Paintbrush, Smartphone, Wrench } from 'lucide-react';

export interface Project {
   id: number;
   title: string;
   slug: string;
   description: string;
   longDescription: string;
   image: string;
   technologies: string[];
   demoUrl?: string;
   githubUrl?: string;
   features: string[];
   type: string; // Add this line
}

export interface BlogPost {
   id: number;
   title: string;
   slug: string;
   date: string;
   image: string;
   excerpt: string;
   content: string;
}

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

export const projects: Project[] = [
   {
      id: 1,
      title: 'E-commerce Dashboard',
      slug: 'e-commerce-dashboard',
      description:
          'A comprehensive dashboard for managing an e-commerce platform with analytics and inventory management.',
      longDescription:
          'This e-commerce dashboard provides a comprehensive solution for online store management. It features real-time analytics, inventory tracking, order management, and customer insights. The dashboard is built with Angular and uses Angular Material for the UI components, providing a consistent and responsive user experience across devices.',
      image: '/portfolio/programming-fulfiledu-uz.jpg',
      technologies: [ 'Angular', 'TypeScript', 'Angular Material', 'SCSS', 'Chart.js' ],
      demoUrl: 'https://demo-ecommerce.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/ecommerce-dashboard',
      features: [
         'Real-time sales analytics',
         'Inventory management',
         'Order processing',
         'Customer management',
         'Responsive design for all devices'
      ],
      type: 'Multipage Application'
   },
   {
      id: 2,
      title: 'Travel Blog Platform',
      slug: 'travel-blog-platform',
      description: 'A platform for travel enthusiasts to share their experiences and connect with fellow travelers.',
      longDescription:
          'The Travel Blog Platform is a social media application designed specifically for travelers. Users can create accounts, share their travel experiences through blog posts with images, follow other travelers, and interact through comments and likes. The platform features a responsive design and was built using Angular with a focus on performance and user experience.',
      image: '/portfolio/fulfiledu-uz.jpg',
      technologies: [ 'Angular', 'JavaScript', 'Tailwind CSS', 'Firebase' ],
      demoUrl: 'https://travel-blog.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/travel-blog',
      features: [
         'User authentication',
         'Blog post creation with rich text editor',
         'Image uploads',
         'Social interactions (comments, likes)',
         'User profiles'
      ],
      type: 'Multipage Application'
   },
   {
      id: 3,
      title: 'Fitness Tracker App',
      slug: 'fitness-tracker-app',
      description: 'A web application for tracking workouts, nutrition, and fitness progress with visualizations.',
      longDescription:
          'The Fitness Tracker App helps users monitor their fitness journey by tracking workouts, nutrition, and overall progress. It provides visual representations of data through charts and graphs, allowing users to set goals and track their achievements. The app features a clean, intuitive interface built with Angular and styled with SCSS for a customized look and feel.',
      image: '/portfolio/qobiliyat-fulfiledu-uz.jpg',
      technologies: [ 'Angular', 'TypeScript', 'SCSS', 'D3.js' ],
      demoUrl: 'https://fitness-tracker.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/fitness-tracker',
      features: [
         'Workout logging and tracking',
         'Nutrition diary',
         'Progress visualization',
         'Goal setting',
         'Customizable dashboard'
      ],
      type: 'Single Page Application'
   },
   {
      id: 4,
      title: 'Real Estate Listing Portal',
      slug: 'real-estate-listing-portal',
      description: 'A modern real estate platform for property listings with advanced search and filtering capabilities.',
      longDescription:
          'This Real Estate Listing Portal provides a comprehensive solution for property buyers, sellers, and agents. It features advanced search and filtering options, detailed property listings with high-quality images, virtual tours, and neighborhood information. Built with Angular and Tailwind CSS, the portal offers a responsive and intuitive user interface that works seamlessly across all devices.',
      image: '/portfolio/rustilida-uz.jpg',
      technologies: [ 'Angular', 'JavaScript', 'Tailwind CSS', 'Google Maps API' ],
      demoUrl: 'https://realestate.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/real-estate-portal',
      features: [
         'Advanced property search',
         'Interactive map view',
         'Virtual property tours',
         'Saved favorites',
         'Contact forms for inquiries'
      ],
      type: 'Multipage Application'
   },
   {
      id: 5,
      title: 'Webinar Landing Page',
      slug: 'webinar-landing-page',
      description: 'A high-converting landing page for a tech webinar with registration form and countdown timer.',
      longDescription:
          'This webinar landing page was designed to maximize registrations for a tech industry webinar. It features a clean, focused design with clear calls to action, speaker information, agenda details, and a simple registration form. The page includes a countdown timer to create urgency and social proof elements to increase conversions.',
      image: '/portfolio/vebinar-dynamics-market-uz.jpg',
      technologies: [ 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS' ],
      demoUrl: 'https://webinar-landing.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/webinar-landing',
      features: [
         'Responsive design',
         'Registration form with validation',
         'Countdown timer',
         'Speaker profiles',
         'Agenda section'
      ],
      type: 'Landing Page'
   },
   {
      id: 6,
      title: 'Product Showcase',
      slug: 'product-showcase',
      description: 'An interactive product showcase page with 3D visualization and detailed specifications.',
      longDescription:
          'This product showcase page provides an immersive experience for users to explore a new tech product. It features interactive elements, smooth animations, and detailed product specifications. The page is designed to highlight the product\'s features and benefits in an engaging way that encourages conversions.',
      image: '/portfolio/video-lessons-fulfil.jpg',
      technologies: [ 'HTML', 'SCSS', 'JavaScript', 'Three.js' ],
      demoUrl: 'https://product-showcase.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/product-showcase',
      features: [
         'Interactive 3D product visualization',
         'Animated feature highlights',
         'Technical specifications',
         'Customer testimonials',
         'Call-to-action buttons'
      ],
      type: 'Landing Page'
   },
   {
      id: 7,
      title: 'ABM Business Platform',
      slug: 'abm-business-platform',
      description: 'A comprehensive business management platform for small and medium enterprises.',
      longDescription:
          'ABM Business Platform is designed to help SMEs manage their operations efficiently. It includes modules for customer relationship management, inventory tracking, financial reporting, and employee management. Built with modern web technologies, it provides a scalable solution for growing businesses.',
      image: '/portfolio/abm-uz.jpg',
      technologies: [ 'React', 'Node.js', 'PostgreSQL', 'Material-UI' ],
      demoUrl: 'https://abm-platform.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/abm-platform',
      features: [
         'CRM functionality',
         'Inventory management',
         'Financial reporting',
         'Employee management',
         'Multi-tenant architecture'
      ],
      type: 'Multipage Application'
   },
   {
      id: 8,
      title: 'Arabtili Language Learning App',
      slug: 'arabtili-language-app',
      description: 'A mobile-first web application for learning Arabic language with interactive lessons.',
      longDescription:
          'This language learning application helps users master Arabic through interactive lessons, pronunciation practice, and cultural insights. The app features a progressive learning system, gamification elements, and adaptive learning algorithms to personalize the experience for each user.',
      image: '/portfolio/arabtili-one-netlify-app.jpg',
      technologies: [ 'Vue.js', 'TypeScript', 'PWA', 'Web Speech API' ],
      demoUrl: 'https://arabtili-app.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/arabtili-app',
      features: [
         'Interactive Arabic lessons',
         'Pronunciation checker',
         'Progress tracking',
         'Offline capability',
         'Cultural context learning'
      ],
      type: 'Single Page Application'
   },
   {
      id: 9,
      title: 'Dildora Tursunova Portfolio',
      slug: 'dildora-portfolio',
      description: 'A dynamic portfolio website showcasing creative work with stunning animations.',
      longDescription:
          'This portfolio website was created for a creative professional to showcase their work in an engaging and visually appealing manner. It features smooth animations, responsive design, and an intuitive navigation system that highlights the creator\'s skills and projects effectively.',
      image: '/portfolio/dildora-tursunova-dynamics-market-uz.jpg',
      technologies: [ 'HTML', 'CSS', 'JavaScript', 'GSAP' ],
      demoUrl: 'https://dildora-portfolio.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/dildora-portfolio',
      features: [
         'Animated portfolio gallery',
         'Responsive design',
         'Contact form integration',
         'Social media links',
         'Performance optimized'
      ],
      type: 'Landing Page'
   },
   {
      id: 10,
      title: 'Dynamics Market Platform',
      slug: 'dynamics-market',
      description: 'An e-commerce marketplace with advanced filtering and seller management features.',
      longDescription:
          'Dynamics Market is a comprehensive e-commerce platform that connects buyers and sellers. It features advanced product filtering, seller dashboards, order management, and integrated payment processing. The platform is designed to handle multiple vendors and provides analytics for both sellers and administrators.',
      image: '/portfolio/dynamics-market-uz.jpg',
      technologies: [ 'Laravel', 'Vue.js', 'MySQL', 'Redis' ],
      demoUrl: 'https://dynamics-market.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/dynamics-market',
      features: [
         'Multi-vendor marketplace',
         'Advanced product filtering',
         'Seller dashboards',
         'Payment integration',
         'Order tracking system'
      ],
      type: 'Multipage Application'
   },
   {
      id: 11,
      title: 'EDO Electronic Document System',
      slug: 'edo-system',
      description: 'An electronic document management system for government organizations.',
      longDescription:
          'EDO is a secure electronic document management system designed for government agencies. It provides document workflow automation, digital signatures, approval processes, and audit trails. The system ensures compliance with regulatory requirements while improving efficiency in document processing.',
      image: '/portfolio/edo-ijro-uz.jpg',
      technologies: [ 'ASP.NET Core', 'Angular', 'SQL Server', 'SignalR' ],
      demoUrl: 'https://edo-system.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/edo-system',
      features: [
         'Digital document workflow',
         'Electronic signatures',
         'Approval processes',
         'Audit trail functionality',
         'Role-based access control'
      ],
      type: 'Multipage Application'
   },
   {
      id: 12,
      title: 'E-Ticket Railway System',
      slug: 'eticket-railway',
      description: 'A modern railway ticketing system with seat selection and payment integration.',
      longDescription:
          'This railway e-ticketing system allows passengers to book train tickets online with real-time seat availability, route planning, and integrated payment processing. The system includes administrative features for managing routes, schedules, and passenger information.',
      image: '/portfolio/eticket-railway-uz.jpg',
      technologies: [ 'React', 'Express.js', 'MongoDB', 'Stripe API' ],
      demoUrl: 'https://eticket-railway.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/eticket-railway',
      features: [
         'Real-time seat booking',
         'Route planning',
         'Payment processing',
         'Ticket management',
         'Administrative dashboard'
      ],
      type: 'Multipage Application'
   },
   {
      id: 13,
      title: 'Fulfiledu Frontend Platform',
      slug: 'frontt-fulfiledu',
      description: 'A comprehensive frontend development learning platform with interactive coding exercises.',
      longDescription:
          'This educational platform focuses on frontend development skills, offering interactive coding challenges, project-based learning, and real-world examples. Students can practice HTML, CSS, JavaScript, and modern frameworks through hands-on exercises and receive instant feedback.',
      image: '/portfolio/frontt-fulfiledu-uz.jpg',
      technologies: [ 'Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS' ],
      demoUrl: 'https://frontt-fulfiledu.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/frontt-fulfiledu',
      features: [
         'Interactive coding challenges',
         'Project-based learning',
         'Progress tracking',
         'Code review system',
         'Community features'
      ],
      type: 'Multipage Application'
   },
   {
      id: 14,
      title: 'Hurriyat Rahmatullaeva Portfolio',
      slug: 'hurriyat-portfolio',
      description: 'An elegant portfolio website for a professional designer with clean aesthetics.',
      longDescription:
          'This portfolio website showcases the work of a professional designer with a focus on clean aesthetics and user experience. The site features a minimalist design, smooth transitions, and an organized presentation of creative work that effectively communicates the designer\'s skills and style.',
      image: '/portfolio/hurriyat-rahmatullaeva.jpg',
      technologies: [ 'HTML', 'SCSS', 'JavaScript', 'AOS Library' ],
      demoUrl: 'https://hurriyat-portfolio.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/hurriyat-portfolio',
      features: [
         'Minimalist design',
         'Portfolio gallery',
         'Smooth animations',
         'Contact form',
         'Responsive layout'
      ],
      type: 'Landing Page'
   },
   {
      id: 15,
      title: 'Lawyer IJRO Legal Platform',
      slug: 'lawyer-ijro',
      description: 'A comprehensive legal case management system for law firms and attorneys.',
      longDescription:
          'This legal platform provides case management tools for law firms, including client management, document storage, billing, and court schedule tracking. The system helps attorneys organize their practice and improve client communication while maintaining confidentiality and compliance.',
      image: '/portfolio/lawyer-ijro-uz.jpg',
      technologies: [ 'Django', 'React', 'PostgreSQL', 'Celery' ],
      demoUrl: 'https://lawyer-ijro.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/lawyer-ijro',
      features: [
         'Case management',
         'Client communication',
         'Document management',
         'Billing system',
         'Court schedule tracking'
      ],
      type: 'Multipage Application'
   },
   {
      id: 16,
      title: 'Mahmudjon B Dynamics Market',
      slug: 'mahmudjon-b-market',
      description: 'A specialized e-commerce platform for automotive parts and accessories.',
      longDescription:
          'This specialized e-commerce platform focuses on automotive parts and accessories. It features detailed product catalogs, compatibility checking, inventory management, and specialized search filters for automotive components. The platform serves both individual customers and automotive businesses.',
      image: '/portfolio/mahmudjon-b-dynamics-market-uz.jpg',
      technologies: [ 'Vue.js', 'Node.js', 'MongoDB', 'Elasticsearch' ],
      demoUrl: 'https://mahmudjon-market.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/mahmudjon-market',
      features: [
         'Automotive parts catalog',
         'Compatibility checker',
         'Advanced search filters',
         'Inventory management',
         'B2B functionality'
      ],
      type: 'Multipage Application'
   },
   {
      id: 17,
      title: 'Mahmudjon Dynamics Market Pro',
      slug: 'mahmudjon-dynamics-market',
      description: 'An advanced version of the dynamics market platform with enhanced features.',
      longDescription:
          'This is an enhanced version of the dynamics market platform with additional features including AI-powered recommendations, advanced analytics, multi-language support, and improved user experience. The platform handles high-volume transactions and provides enterprise-level functionality.',
      image: '/portfolio/mahmudjon-dynamics-market-uz.jpg',
      technologies: [ 'React', 'Node.js', 'GraphQL', 'Redis' ],
      demoUrl: 'https://mahmudjon-dynamics-pro.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/mahmudjon-dynamics-pro',
      features: [
         'AI-powered recommendations',
         'Advanced analytics',
         'Multi-language support',
         'Enterprise features',
         'High-performance architecture'
      ],
      type: 'Multipage Application'
   },
   {
      id: 18,
      title: 'Masterkomo Educational Platform',
      slug: 'masterkomo-platform',
      description: 'An online learning management system with video courses and interactive content.',
      longDescription:
          'Masterkomo is a comprehensive learning management system that provides video courses, interactive content, and student progress tracking. The platform supports multiple instructors, course categories, and assessment tools, making it suitable for educational institutions and corporate training.',
      image: '/portfolio/masterkomo-uz.jpg',
      technologies: [ 'Laravel', 'Vue.js', 'MySQL', 'FFmpeg' ],
      demoUrl: 'https://masterkomo.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/masterkomo',
      features: [
         'Video course delivery',
         'Interactive assessments',
         'Progress tracking',
         'Multi-instructor support',
         'Certificate generation'
      ],
      type: 'Multipage Application'
   },
   {
      id: 19,
      title: 'OKR Management System',
      slug: 'okr-system',
      description: 'A modern OKR (Objectives and Key Results) tracking system for teams and organizations.',
      longDescription:
          'This OKR management system helps organizations implement and track Objectives and Key Results methodology. It provides goal setting, progress tracking, team alignment, and performance analytics. The system supports multiple organizational levels and integrates with popular productivity tools.',
      image: '/portfolio/okr-us-uz.jpg',
      technologies: [ 'Angular', 'NestJS', 'PostgreSQL', 'Chart.js' ],
      demoUrl: 'https://okr-system.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/okr-system',
      features: [
         'Goal setting and tracking',
         'Team alignment tools',
         'Progress visualization',
         'Performance analytics',
         'Integration capabilities'
      ],
      type: 'Multipage Application'
   },
   {
      id: 20,
      title: 'Russian Language Learning Platform',
      slug: 'russkiy-fulfiledu',
      description: 'A comprehensive Russian language learning platform with interactive exercises.',
      longDescription:
          'This platform provides comprehensive Russian language learning with interactive exercises, grammar lessons, vocabulary building, and conversation practice. It includes adaptive learning algorithms, progress tracking, and cultural context to help learners master the Russian language effectively.',
      image: '/portfolio/russkiy-fulfiledu-uz.jpg',
      technologies: [ 'React', 'Firebase', 'Web Speech API', 'Material-UI' ],
      demoUrl: 'https://russkiy-fulfiledu.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/russkiy-fulfiledu',
      features: [
         'Interactive Russian lessons',
         'Grammar exercises',
         'Vocabulary building',
         'Pronunciation practice',
         'Cultural context learning'
      ],
      type: 'Single Page Application'
   },
   {
      id: 21,
      title: 'SAT Jamals Preparation Platform',
      slug: 'sat-jamals',
      description: 'A comprehensive SAT test preparation platform with practice tests and analytics.',
      longDescription:
          'SAT Jamals is a comprehensive test preparation platform designed to help students excel in SAT exams. It features practice tests, detailed analytics, personalized study plans, and progress tracking. The platform adapts to each student\'s learning pace and identifies areas for improvement.',
      image: '/portfolio/sat-jamals-uz.jpg',
      technologies: [ 'Vue.js', 'Express.js', 'MongoDB', 'D3.js' ],
      demoUrl: 'https://sat-jamals.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/sat-jamals',
      features: [
         'Full-length practice tests',
         'Detailed performance analytics',
         'Personalized study plans',
         'Progress tracking',
         'Weakness identification'
      ],
      type: 'Multipage Application'
   },
   {
      id: 22,
      title: 'Uzumone Mobile Banking App',
      slug: 'uzumone-app',
      description: 'A modern mobile banking application with comprehensive financial services.',
      longDescription:
          'Uzumone is a feature-rich mobile banking application that provides comprehensive financial services including account management, money transfers, bill payments, and investment tracking. The app features a user-friendly interface with enhanced security measures and real-time transaction processing.',
      image: '/portfolio/uzumone-netlify-app.jpg',
      technologies: [ 'React Native', 'Node.js', 'PostgreSQL', 'JWT' ],
      demoUrl: 'https://uzumone-app.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/uzumone-app',
      features: [
         'Account management',
         'Money transfers',
         'Bill payments',
         'Investment tracking',
         'Enhanced security'
      ],
      type: 'Single Page Application'
   },
   {
      id: 23,
      title: 'Webinar Linguabarno Platform',
      slug: 'webinar-linguabarno',
      description: 'A specialized webinar platform for language learning with interactive features.',
      longDescription:
          'This specialized webinar platform is designed for language learning sessions. It provides interactive features like real-time translation, pronunciation feedback, cultural context sharing, and collaborative exercises. The platform supports multiple languages and includes recording capabilities for later review.',
      image: '/portfolio/vebinar-linguabarno-uz.jpg',
      technologies: [ 'WebRTC', 'Socket.io', 'React', 'MongoDB' ],
      demoUrl: 'https://webinar-linguabarno.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/webinar-linguabarno',
      features: [
         'Real-time language webinars',
         'Interactive translation',
         'Pronunciation feedback',
         'Cultural context sharing',
         'Session recording'
      ],
      type: 'Multipage Application'
   },
   {
      id: 24,
      title: 'Web Development Portfolio',
      slug: 'web-rusiyzabon',
      description: 'A showcase website for web development services with modern design.',
      longDescription:
          'This portfolio website showcases web development services with a focus on modern design principles and user experience. It features case studies, service offerings, client testimonials, and a clean, professional presentation that effectively communicates technical expertise and creativity.',
      image: '/portfolio/web-rusiyzabon-uz.jpg',
      technologies: [ 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS' ],
      demoUrl: 'https://web-rusiyzabon.example.com',
      githubUrl: 'https://github.com/sultonbayevogabek/web-rusiyzabon',
      features: [
         'Service showcase',
         'Case studies',
         'Client testimonials',
         'Modern design',
         'Contact integration'
      ],
      type: 'Landing Page'
   }
];

export const blogPosts: BlogPost[] = [
   {
      id: 1,
      title: 'The Evolution of Frontend Development',
      slug: 'evolution-of-frontend-development',
      date: '2023-05-15',
      image: '/placeholder.svg?height=600&width=1200',
      excerpt: 'Exploring how frontend development has evolved over the years and what the future holds for developers.',
      content: `<h1>The Evolution of Frontend Development</h1>

<p>Frontend development has come a long way since the early days of the web. From static HTML pages to complex single-page applications, the evolution has been remarkable.</p>

<h2>The Early Days: HTML and CSS</h2>

<p>In the beginning, websites were simple static pages built with HTML. CSS came along to add styling capabilities, separating content from presentation. This was a revolutionary step that allowed for more creative and visually appealing websites.</p>

<h2>The JavaScript Revolution</h2>

<p>The introduction of JavaScript transformed the web from static pages to interactive applications. Libraries like jQuery simplified DOM manipulation and made it easier to create dynamic content.</p>

<h2>The Rise of Frontend Frameworks</h2>

<p>The next major shift came with the introduction of frontend frameworks like Angular, React, and Vue. These frameworks provided structured approaches to building complex applications, with features like component-based architecture, state management, and virtual DOM.</p>

<h2>Modern Frontend Development</h2>

<p>Today, frontend development encompasses a wide range of technologies and practices:</p>

<ul>
  <li><strong>Component-based architecture</strong>: Breaking UI into reusable components</li>
  <li><strong>State management</strong>: Tools like Redux, NgRx, and Vuex for managing application state</li>
  <li><strong>CSS-in-JS and CSS Modules</strong>: More modular approaches to styling</li>
  <li><strong>Static site generators and JAMstack</strong>: Combining the best of static and dynamic sites</li>
  <li><strong>Progressive Web Apps</strong>: Web applications that offer native-like experiences</li>
</ul>

<h2>What's Next?</h2>

<p>The future of frontend development is likely to focus on:</p>

<ul>
  <li><strong>Performance optimization</strong>: Making web apps faster and more efficient</li>
  <li><strong>Accessibility</strong>: Ensuring web content is available to everyone</li>
  <li><strong>AI and machine learning integration</strong>: Smarter, more personalized user experiences</li>
  <li><strong>WebAssembly</strong>: Bringing near-native performance to web applications</li>
</ul>

<p>As frontend developers, we must continue learning and adapting to these changes to create better web experiences for users.</p>
    `
   },
   {
      id: 2,
      title: 'Mastering Angular: Best Practices for Large-Scale Applications',
      slug: 'mastering-angular-best-practices',
      date: '2023-06-22',
      image: '/placeholder.svg?height=600&width=1200',
      excerpt: 'Learn how to structure and optimize Angular applications for scalability and maintainability.',
      content: `<h1>Mastering Angular: Best Practices for Large-Scale Applications</h1>

<p>Angular is a powerful framework for building complex web applications, but with great power comes great responsibility. In this post, we'll explore best practices for building large-scale Angular applications that remain maintainable and performant.</p>

<h2>Modular Architecture</h2>

<p>One of Angular's strengths is its module system. For large applications, consider:</p>

<ul>
  <li><strong>Feature modules</strong>: Organize code around specific features or domains</li>
  <li><strong>Shared modules</strong>: Reusable components, directives, and pipes</li>
  <li><strong>Core module</strong>: Singleton services and application-wide providers</li>
</ul>

<h2>Smart and Presentational Components</h2>

<p>Separate your components into two categories:</p>

<ul>
  <li><strong>Smart components</strong>: Handle data fetching, state management, and business logic</li>
  <li><strong>Presentational components</strong>: Focus on UI rendering with inputs and outputs</li>
</ul>

<p>This separation makes your components more reusable and easier to test.</p>

<h2>State Management</h2>

<p>For complex applications, consider using NgRx or another state management solution:</p>

<ul>
  <li>Centralized state management</li>
  <li>Predictable state changes through reducers</li>
  <li>Side effect handling with Effects</li>
  <li>Powerful debugging with Redux DevTools</li>
</ul>

<h2>Performance Optimization</h2>

<p>Keep your Angular application fast with these techniques:</p>

<ul>
  <li>OnPush change detection strategy</li>
  <li>Lazy loading modules</li>
  <li>Virtual scrolling for long lists</li>
  <li>Web workers for CPU-intensive tasks</li>
</ul>

<h2>Testing Strategy</h2>

<p>A comprehensive testing strategy includes:</p>

<ul>
  <li>Unit tests for services and components</li>
  <li>Integration tests for feature modules</li>
  <li>End-to-end tests for critical user flows</li>
</ul>

<h2>Conclusion</h2>

<p>Building large-scale Angular applications requires careful planning and adherence to best practices. By following these guidelines, you can create applications that are not only powerful but also maintainable and scalable.</p>
    `
   },
   {
      id: 3,
      title: 'The Power of Tailwind CSS: From Skeptic to Advocate',
      slug: 'power-of-tailwind-css',
      date: '2023-07-10',
      image: '/placeholder.svg?height=600&width=1200',
      excerpt: 'My journey from being skeptical about utility-first CSS to becoming a Tailwind CSS advocate.',
      content: `<h1>The Power of Tailwind CSS: From Skeptic to Advocate</h1>

<p>When I first heard about Tailwind CSS, I was skeptical. The idea of cluttering my HTML with utility classes seemed like a step backward. However, after using it on several projects, I've become a strong advocate. Here's why.</p>

<h2>The Problem with Traditional CSS</h2>

<p>Traditional CSS approaches often lead to:</p>

<ul>
  <li><strong>CSS bloat</strong>: Styles that accumulate over time and are difficult to remove</li>
  <li><strong>Naming challenges</strong>: Coming up with meaningful class names</li>
  <li><strong>Specificity issues</strong>: Fighting with CSS specificity</li>
  <li><strong>Context switching</strong>: Moving between HTML and CSS files</li>
</ul>

<h2>The Tailwind Approach</h2>

<p>Tailwind's utility-first approach addresses these issues:</p>

<ul>
  <li><strong>No more naming</strong>: Focus on styling rather than naming</li>
  <li><strong>Consistent design system</strong>: Predefined values for spacing, colors, etc.</li>
  <li><strong>Lower cognitive load</strong>: Apply styles directly where they're needed</li>
  <li><strong>Highly customizable</strong>: Tailor the framework to your project's needs</li>
</ul>

<h2>Real-World Benefits</h2>

<p>In practice, Tailwind has provided several benefits:</p>

<ul>
  <li><strong>Faster development</strong>: Apply styles without writing custom CSS</li>
  <li><strong>Responsive design</strong>: Built-in responsive utilities</li>
  <li><strong>Team consistency</strong>: Standardized design tokens</li>
  <li><strong>Smaller CSS bundles</strong>: With proper purging, only used utilities are included</li>
</ul>

<h2>Best Practices</h2>

<p>To get the most out of Tailwind:</p>

<ul>
  <li>Use component extraction for repeated patterns</li>
  <li>Leverage Tailwind's configuration to match your design system</li>
  <li>Use @apply for complex, reusable components</li>
  <li>Set up proper purging for production builds</li>
</ul>

<h2>Conclusion</h2>

<p>While Tailwind isn't perfect for every project, it has transformed my approach to CSS. The productivity gains and maintainability benefits have made me a convert. If you're still skeptical, I encourage you to try it on a small project and experience the difference yourself.</p>
    `
   },
   {
      id: 4,
      title: 'Responsive Design in 2023: Beyond Media Queries',
      slug: 'responsive-design-beyond-media-queries',
      date: '2023-08-05',
      image: '/placeholder.svg?height=600&width=1200',
      excerpt: 'Modern approaches to responsive design that go beyond traditional media queries.',
      content: `<h1>Responsive Design in 2023: Beyond Media Queries</h1>

<p>Responsive design has evolved significantly since Ethan Marcotte first coined the term in 2010. While media queries remain important, modern responsive design encompasses much more. Let's explore the current state of responsive design and the tools at our disposal.</p>

<h2>The Evolution of Responsive Design</h2>

<p>Responsive design began with three core ingredients:</p>

<ol>
  <li>Fluid grids</li>
  <li>Flexible images</li>
  <li>Media queries</li>
</ol>

<p>While these fundamentals remain relevant, our toolkit has expanded dramatically.</p>

<h2>Modern CSS Layout Tools</h2>

<p>Modern CSS provides powerful tools for responsive layouts:</p>

<ul>
  <li><strong>CSS Grid</strong>: Two-dimensional layout system with intrinsic sizing</li>
  <li><strong>Flexbox</strong>: One-dimensional layout for flexible content</li>
  <li><strong>Container Queries</strong>: Style elements based on their container's size, not just the viewport</li>
  <li><strong>Logical Properties</strong>: Direction-agnostic properties for international layouts</li>
</ul>

<h2>Intrinsic Web Design</h2>

<p>Jen Simmons introduced the concept of "Intrinsic Web Design," which focuses on:</p>

<ul>
  <li>Fluid and fixed elements working together</li>
  <li>Truly two-dimensional layouts</li>
  <li>Nested contexts</li>
  <li>Expanding and contracting content</li>
  <li>Media queries as enhancement, not the entire solution</li>
</ul>

<h2>Responsive Typography</h2>

<p>Typography has also evolved:</p>

<ul>
  <li><strong>Fluid typography</strong>: Using clamp() for font sizes that scale smoothly</li>
  <li><strong>Variable fonts</strong>: Adjusting font characteristics based on viewport size</li>
  <li><strong>Container-relative units</strong>: Sizing text relative to its container</li>
</ul>

<h2>Beyond Visual Layout</h2>

<p>Modern responsive design considers:</p>

<ul>
  <li><strong>Performance</strong>: Different assets for different devices and connections</li>
  <li><strong>Interaction</strong>: Adapting to touch, mouse, keyboard, and other input methods</li>
  <li><strong>Accessibility</strong>: Ensuring usability across all devices and abilities</li>
</ul>

<h2>Conclusion</h2>

<p>Responsive design in 2023 is about creating experiences that adapt to any context, not just different screen sizes. By leveraging modern CSS, performance techniques, and a broader understanding of user contexts, we can create truly responsive experiences that work for everyone.</p>
    `
   }
];
