export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
  demoUrl?: string;
  features: string[];
  type: 'Vebinar sayt'
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Komiljon Xamidjonov',
    slug: 'komiljon-xamidjonov',
    description:
      'A comprehensive dashboard for managing an e-commerce platform with analytics and inventory management.',
    longDescription:
      'This e-commerce dashboard provides a comprehensive solution for online store management. It features real-time analytics, inventory tracking, order management, and customer insights. The dashboard is built with Angular and uses Angular Material for the UI components, providing a consistent and responsive user experience across devices.',
    image: '/portfolio/programming-fulfiledu-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://demo-ecommerce.example.com',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 2,
    title: 'Travel Blog Platform',
    slug: 'travel-blog-platform',
    description: 'A platform for travel enthusiasts to share their experiences and connect with fellow travelers.',
    longDescription:
      'The Travel Blog Platform is a social media application designed specifically for travelers. Users can create accounts, share their travel experiences through blog posts with images, follow other travelers, and interact through comments and likes. The platform features a responsive design and was built using Angular with a focus on performance and user experience.',
    image: '/portfolio/fulfiledu-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://travel-blog.example.com',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 3,
    title: 'Fitness Tracker App',
    slug: 'fitness-tracker-app',
    description: 'A web application for tracking workouts, nutrition, and fitness progress with visualizations.',
    longDescription:
      'The Fitness Tracker App helps users monitor their fitness journey by tracking workouts, nutrition, and overall progress. It provides visual representations of data through charts and graphs, allowing users to set goals and track their achievements. The app features a clean, intuitive interface built with Angular and styled with SCSS for a customized look and feel.',
    image: '/portfolio/qobiliyat-fulfiledu-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://fitness-tracker.example.com',
    features: [
      'Workout logging and tracking',
      'Nutrition diary',
      'Progress visualization',
      'Goal setting',
      'Customizable dashboard'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 4,
    title: 'Real Estate Listing Portal',
    slug: 'real-estate-listing-portal',
    description: 'A modern real estate platform for property listings with advanced search and filtering capabilities.',
    longDescription:
      'This Real Estate Listing Portal provides a comprehensive solution for property buyers, sellers, and agents. It features advanced search and filtering options, detailed property listings with high-quality images, virtual tours, and neighborhood information. Built with Angular and Tailwind CSS, the portal offers a responsive and intuitive user interface that works seamlessly across all devices.',
    image: '/portfolio/rustilida-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://realestate.example.com',
    features: [
      'Advanced property search',
      'Interactive map view',
      'Virtual property tours',
      'Saved favorites',
      'Contact forms for inquiries'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 5,
    title: 'Webinar Landing Page',
    slug: 'webinar-landing-page',
    description: 'A high-converting landing page for a tech webinar with registration form and countdown timer.',
    longDescription:
      'This webinar landing page was designed to maximize registrations for a tech industry webinar. It features a clean, focused design with clear calls to action, speaker information, agenda details, and a simple registration form. The page includes a countdown timer to create urgency and social proof elements to increase conversions.',
    image: '/portfolio/vebinar-dynamics-market-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://webinar-landing.example.com',
    features: [
      'Responsive design',
      'Registration form with validation',
      'Countdown timer',
      'Speaker profiles',
      'Agenda section'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 6,
    title: 'Product Showcase',
    slug: 'product-showcase',
    description: 'An interactive product showcase page with 3D visualization and detailed specifications.',
    longDescription:
      'This product showcase page provides an immersive experience for users to explore a new tech product. It features interactive elements, smooth animations, and detailed product specifications. The page is designed to highlight the product\'s features and benefits in an engaging way that encourages conversions.',
    image: '/portfolio/video-lessons-fulfil.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://product-showcase.example.com',
    features: [
      'Interactive 3D product visualization',
      'Animated feature highlights',
      'Technical specifications',
      'Customer testimonials',
      'Call-to-action buttons'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 7,
    title: 'ABM Business Platform',
    slug: 'abm-business-platform',
    description: 'A comprehensive business management platform for small and medium enterprises.',
    longDescription:
      'ABM Business Platform is designed to help SMEs manage their operations efficiently. It includes modules for customer relationship management, inventory tracking, financial reporting, and employee management. Built with modern web technologies, it provides a scalable solution for growing businesses.',
    image: '/portfolio/abm-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://abm-platform.example.com',
    features: [
      'CRM functionality',
      'Inventory management',
      'Financial reporting',
      'Employee management',
      'Multi-tenant architecture'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 8,
    title: 'Arabtili Language Learning App',
    slug: 'arabtili-language-app',
    description: 'A mobile-first web application for learning Arabic language with interactive lessons.',
    longDescription:
      'This language learning application helps users master Arabic through interactive lessons, pronunciation practice, and cultural insights. The app features a progressive learning system, gamification elements, and adaptive learning algorithms to personalize the experience for each user.',
    image: '/portfolio/arabtili-one-netlify-app.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://arabtili-app.example.com',
    features: [
      'Interactive Arabic lessons',
      'Pronunciation checker',
      'Progress tracking',
      'Offline capability',
      'Cultural context learning'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 9,
    title: 'Dildora Tursunova Portfolio',
    slug: 'dildora-portfolio',
    description: 'A dynamic portfolio website showcasing creative work with stunning animations.',
    longDescription:
      'This portfolio website was created for a creative professional to showcase their work in an engaging and visually appealing manner. It features smooth animations, responsive design, and an intuitive navigation system that highlights the creator\'s skills and projects effectively.',
    image: '/portfolio/dildora-tursunova-dynamics-market-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://dildora-portfolio.example.com',
    features: [
      'Animated portfolio gallery',
      'Responsive design',
      'Contact form integration',
      'Social media links',
      'Performance optimized'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 10,
    title: 'Dynamics Market Platform',
    slug: 'dynamics-market',
    description: 'An e-commerce marketplace with advanced filtering and seller management features.',
    longDescription:
      'Dynamics Market is a comprehensive e-commerce platform that connects buyers and sellers. It features advanced product filtering, seller dashboards, order management, and integrated payment processing. The platform is designed to handle multiple vendors and provides analytics for both sellers and administrators.',
    image: '/portfolio/dynamics-market-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://dynamics-market.example.com',
    features: [
      'Multi-vendor marketplace',
      'Advanced product filtering',
      'Seller dashboards',
      'Payment integration',
      'Order tracking system'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 11,
    title: 'EDO Electronic Document System',
    slug: 'edo-system',
    description: 'An electronic document management system for government organizations.',
    longDescription:
      'EDO is a secure electronic document management system designed for government agencies. It provides document workflow automation, digital signatures, approval processes, and audit trails. The system ensures compliance with regulatory requirements while improving efficiency in document processing.',
    image: '/portfolio/edo-ijro-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://edo-system.example.com',
    features: [
      'Digital document workflow',
      'Electronic signatures',
      'Approval processes',
      'Audit trail functionality',
      'Role-based access control'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 12,
    title: 'E-Ticket Railway System',
    slug: 'eticket-railway',
    description: 'A modern railway ticketing system with seat selection and payment integration.',
    longDescription:
      'This railway e-ticketing system allows passengers to book train tickets online with real-time seat availability, route planning, and integrated payment processing. The system includes administrative features for managing routes, schedules, and passenger information.',
    image: '/portfolio/eticket-railway-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://eticket-railway.example.com',
    features: [
      'Real-time seat booking',
      'Route planning',
      'Payment processing',
      'Ticket management',
      'Administrative dashboard'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 13,
    title: 'Fulfiledu Frontend Platform',
    slug: 'frontt-fulfiledu',
    description: 'A comprehensive frontend development learning platform with interactive coding exercises.',
    longDescription:
      'This educational platform focuses on frontend development skills, offering interactive coding challenges, project-based learning, and real-world examples. Students can practice HTML, CSS, JavaScript, and modern frameworks through hands-on exercises and receive instant feedback.',
    image: '/portfolio/frontt-fulfiledu-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://frontt-fulfiledu.example.com',
    features: [
      'Interactive coding challenges',
      'Project-based learning',
      'Progress tracking',
      'Code review system',
      'Community features'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 14,
    title: 'Hurriyat Rahmatullaeva Portfolio',
    slug: 'hurriyat-portfolio',
    description: 'An elegant portfolio website for a professional designer with clean aesthetics.',
    longDescription:
      'This portfolio website showcases the work of a professional designer with a focus on clean aesthetics and user experience. The site features a minimalist design, smooth transitions, and an organized presentation of creative work that effectively communicates the designer\'s skills and style.',
    image: '/portfolio/hurriyat-rahmatullaeva.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://hurriyat-portfolio.example.com',
    features: [
      'Minimalist design',
      'Portfolio gallery',
      'Smooth animations',
      'Contact form',
      'Responsive layout'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 15,
    title: 'Lawyer IJRO Legal Platform',
    slug: 'lawyer-ijro',
    description: 'A comprehensive legal case management system for law firms and attorneys.',
    longDescription:
      'This legal platform provides case management tools for law firms, including client management, document storage, billing, and court schedule tracking. The system helps attorneys organize their practice and improve client communication while maintaining confidentiality and compliance.',
    image: '/portfolio/lawyer-ijro-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://lawyer-ijro.example.com',
    features: [
      'Case management',
      'Client communication',
      'Document management',
      'Billing system',
      'Court schedule tracking'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 16,
    title: 'Mahmudjon B Dynamics Market',
    slug: 'mahmudjon-b-market',
    description: 'A specialized e-commerce platform for automotive parts and accessories.',
    longDescription:
      'This specialized e-commerce platform focuses on automotive parts and accessories. It features detailed product catalogs, compatibility checking, inventory management, and specialized search filters for automotive components. The platform serves both individual customers and automotive businesses.',
    image: '/portfolio/mahmudjon-b-dynamics-market-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://mahmudjon-market.example.com',
    features: [
      'Automotive parts catalog',
      'Compatibility checker',
      'Advanced search filters',
      'Inventory management',
      'B2B functionality'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 17,
    title: 'Mahmudjon Dynamics Market Pro',
    slug: 'mahmudjon-dynamics-market',
    description: 'An advanced version of the dynamics market platform with enhanced features.',
    longDescription:
      'This is an enhanced version of the dynamics market platform with additional features including AI-powered recommendations, advanced analytics, multi-language support, and improved user experience. The platform handles high-volume transactions and provides enterprise-level functionality.',
    image: '/portfolio/mahmudjon-dynamics-market-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://mahmudjon-dynamics-pro.example.com',
    features: [
      'AI-powered recommendations',
      'Advanced analytics',
      'Multi-language support',
      'Enterprise features',
      'High-performance architecture'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 18,
    title: 'Masterkomo Educational Platform',
    slug: 'masterkomo-platform',
    description: 'An online learning management system with video courses and interactive content.',
    longDescription:
      'Masterkomo is a comprehensive learning management system that provides video courses, interactive content, and student progress tracking. The platform supports multiple instructors, course categories, and assessment tools, making it suitable for educational institutions and corporate training.',
    image: '/portfolio/masterkomo-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://masterkomo.example.com',
    features: [
      'Video course delivery',
      'Interactive assessments',
      'Progress tracking',
      'Multi-instructor support',
      'Certificate generation'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 19,
    title: 'OKR Management System',
    slug: 'okr-system',
    description: 'A modern OKR (Objectives and Key Results) tracking system for teams and organizations.',
    longDescription:
      'This OKR management system helps organizations implement and track Objectives and Key Results methodology. It provides goal setting, progress tracking, team alignment, and performance analytics. The system supports multiple organizational levels and integrates with popular productivity tools.',
    image: '/portfolio/okr-us-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://okr-system.example.com',
    features: [
      'Goal setting and tracking',
      'Team alignment tools',
      'Progress visualization',
      'Performance analytics',
      'Integration capabilities'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 20,
    title: 'Russian Language Learning Platform',
    slug: 'russkiy-fulfiledu',
    description: 'A comprehensive Russian language learning platform with interactive exercises.',
    longDescription:
      'This platform provides comprehensive Russian language learning with interactive exercises, grammar lessons, vocabulary building, and conversation practice. It includes adaptive learning algorithms, progress tracking, and cultural context to help learners master the Russian language effectively.',
    image: '/portfolio/russkiy-fulfiledu-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://russkiy-fulfiledu.example.com',
    features: [
      'Interactive Russian lessons',
      'Grammar exercises',
      'Vocabulary building',
      'Pronunciation practice',
      'Cultural context learning'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 21,
    title: 'SAT Jamals Preparation Platform',
    slug: 'sat-jamals',
    description: 'A comprehensive SAT test preparation platform with practice tests and analytics.',
    longDescription:
      'SAT Jamals is a comprehensive test preparation platform designed to help students excel in SAT exams. It features practice tests, detailed analytics, personalized study plans, and progress tracking. The platform adapts to each student\'s learning pace and identifies areas for improvement.',
    image: '/portfolio/sat-jamals-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://sat-jamals.example.com',
    features: [
      'Full-length practice tests',
      'Detailed performance analytics',
      'Personalized study plans',
      'Progress tracking',
      'Weakness identification'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 22,
    title: 'Uzumone Mobile Banking App',
    slug: 'uzumone-app',
    description: 'A modern mobile banking application with comprehensive financial services.',
    longDescription:
      'Uzumone is a feature-rich mobile banking application that provides comprehensive financial services including account management, money transfers, bill payments, and investment tracking. The app features a user-friendly interface with enhanced security measures and real-time transaction processing.',
    image: '/portfolio/uzumone-netlify-app.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://uzumone-app.example.com',
    features: [
      'Account management',
      'Money transfers',
      'Bill payments',
      'Investment tracking',
      'Enhanced security'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 23,
    title: 'Webinar Linguabarno Platform',
    slug: 'webinar-linguabarno',
    description: 'A specialized webinar platform for language learning with interactive features.',
    longDescription:
      'This specialized webinar platform is designed for language learning sessions. It provides interactive features like real-time translation, pronunciation feedback, cultural context sharing, and collaborative exercises. The platform supports multiple languages and includes recording capabilities for later review.',
    image: '/portfolio/vebinar-linguabarno-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://webinar-linguabarno.example.com',
    features: [
      'Real-time language webinars',
      'Interactive translation',
      'Pronunciation feedback',
      'Cultural context sharing',
      'Session recording'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 24,
    title: 'Web Development Portfolio',
    slug: 'web-rusiyzabon',
    description: 'A showcase website for web development services with modern design.',
    longDescription:
      'This portfolio website showcases web development services with a focus on modern design principles and user experience. It features case studies, service offerings, client testimonials, and a clean, professional presentation that effectively communicates technical expertise and creativity.',
    image: '/portfolio/web-rusiyzabon-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://web-rusiyzabon.example.com',
    features: [
      'Service showcase',
      'Case studies',
      'Client testimonials',
      'Modern design',
      'Contact integration'
    ],
    type: 'Vebinar sayt'
  }
];
