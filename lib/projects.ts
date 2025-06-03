export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
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
    slug: 'programming-fulfiledu-uz',
    description: `
      Xalqaro kompaniyalarda ishlayotgan tajribali dasturchi Komiljon Xamidjonovning "Dasturlashda 0 dan 1000$ topish qadamlari" nomli vebinari
      uchun landing sahifa. Sayt performensiga alohida e'tibor berilgan. Aynan shu saytda Visit Rate 87% bo'lgan. Targetologlar bu nimaligini yaxshiroq tushunadi.
      Visit Rate - bu targetingda chiqqan reklamadagi "Learn More" tugmasini bosganlardan necha foizi saytni to'liq ocha olganining ko'rsatkichi.
    `,
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
    title: 'Fulfil Education',
    slug: 'fulfil-education-uz',
    description: `
      Fulfil jamoasi uchun ko'p sahifalik veb-sayt. Saytda jamoa haqida to'liq ma'lumot olish mumkin. Shuningdek Fulfil jamoasida bo'layotgan yangiliklar va
      bo'sh ish o'rinlari haqidagi ma'lumotlar saytga joylab turiladi. \n
      Saytni Angular'da ko'targanman. Nimaga Angular? Angular SPA ilovalarni yaratish uchun imkoniyat beradi. SPA - Single Page Application. Bu degani sayt bir marta
      yuklanganidan keyin, boshqa menyularga o'tishda foydalanuvchidan qo'shimcha internet trafik va vaqt talab qilinmaydi.
      Saytga bitta kirgan odam xuddi telefoniga dastur o'rnatgan odamga o'xshab bo'limdan bo'limga, sayt fayllarini boshqatdan yuklamasdan foydalana oladi.
      Admin uchun alohida panel qilinmagan. Ma'lumotlarni dinamik kiritib turish uchun Google Sheets'dan foydalanilgan.
    `,
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
