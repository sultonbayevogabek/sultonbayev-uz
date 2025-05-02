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

export interface WorkExperience {
   title: string;
   company: string;
   location: string;
   startDate: string;
   endDate?: string;
   description: string[];
   technologies?: string[];
}

export interface Education {
   institution: string;
   degree: string;
   location: string;
   startDate: string;
   endDate?: string;
   description?: string;
}

export const workExperience: WorkExperience[] = [
   {
      title: 'Senior Frontend Developer',
      company: 'Unicon Soft LLC',
      location: 'Tashkent, Uzbekistan',
      startDate: '2022-09-01',
      description: [
         'Played a key role in the development and maintenance of large-scale web applications for government organizations',
         'Specialized in building and supporting electronic document management systems used by civil servants across various state institutions',
         'Leveraged Angular, SCSS, and Angular Material to create complex, responsive, and scalable user interfaces',
         'Collaborated closely with cross-functional teams to implement new features, fix bugs, and ensure high performance and maintainability',
         'Gained extensive experience in developing enterprise-level frontend systems and solving real-world technical challenges',
         'Contributed to improving internal development standards and mentoring junior developers when necessary'
      ],
      technologies: [ 'Angular', 'RxJS', 'TypeScript', 'SCSS', 'Angular Material', 'RxJS' ]
   },
   {
      title: 'Middle Angular Developer',
      company: 'Axon Logic LLC',
      location: 'Tashkent, Uzbekistan',
      startDate: '2021-12-06',
      endDate: '2022-08-31',
      description: [
         'Contributed to the development of multiple web applications for Uzbekistan Railways, participating in real-world projects under the supervision of senior developers',
         'Utilized Angular, Bootstrap, NgBootstrap, and SCSS to build responsive and user-friendly interfaces',
         'Gained valuable experience in enterprise-level frontend development, code structure, and component-based architecture',
         'Collaborated with the team to debug, optimize, and maintain web applications to ensure high performance and stability',
         'Followed best practices in frontend development and improved technical skills through daily coding and project involvement'
      ],
      technologies: [ 'Angular', 'NgBootstrap', 'TypeScript', 'RxJS', 'Bootstrap',  'SCSS' ]
   },
   {
      title: 'Frontend Programming Instructor',
      company: 'Fulfil Education',
      location: 'Tashkent, Uzbekistan',
      startDate: '2020-02-01',
      endDate: '2022-05-30',
      description: [
         'Delivered online frontend development courses to beginner and intermediate-level students, focusing on core web technologies such as HTML, CSS, SCSS, Bootstrap, JavaScript, and Webpack',
         'Developed and maintained structured course materials and hands-on coding assignments to facilitate interactive learning',
         'Guided students through practical projects, helping them build fully functional responsive websites',
         'Provided one-on-one mentorship, answered technical questions, and offered career guidance to aspiring developers',
         'Continuously updated the curriculum based on industry trends to ensure relevance and quality of education'
      ],
      technologies: [ 'HTML', 'CSS', 'SCSS', 'JavaScript', 'Bootstrap', 'Webpack' ]
   }
];

export const education: Education[] = [
   {
      institution: 'Tashkent State Transport University',
      degree: 'Bachelor’s Degree in Computer Science and Information Technology',
      location: 'Tashkent, Uzbekistan',
      startDate: '2018-09-03',
      endDate: '2022-06-21',
      description: 'Studied software development, computer systems, and modern information technologies with a focus on practical and theoretical computing skills.'
   },
   {
      institution: 'Pitnak Vocational College of Transport',
      degree: 'Technical Mechanic in Car Assembly and Testing',
      location: 'Pitnak, Uzbekistan',
      startDate: '2015-09-02',
      endDate: '2018-06-17',
      description:
         'Focused on automobile mechanics, including assembly techniques, diagnostics, and testing procedures of automotive systems.'
   }
];

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
      image: '/placeholder.svg?height=600&width=1200',
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
      image: '/placeholder.svg?height=600&width=1200',
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
      image: '/placeholder.svg?height=600&width=1200',
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
      image: '/placeholder.svg?height=600&width=1200',
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
      image: '/placeholder.svg?height=600&width=1200',
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
      image: '/placeholder.svg?height=600&width=1200',
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
