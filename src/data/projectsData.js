

export const projects = [
  {
    id: 'institute-management',
    title: 'Institute Management System',
    date: "Nov '24 — March '25",
    shortDescription:
      'App to manage students, courses, staff with Spring Boot, React, and MySQL.',
    fullDescription:
      'A complete web-based system to handle institute operations like student registration, course management, role-based dashboards, exam management and more.',
    tech: ['Java', 'Spring Boot', 'React', 'MySQL'],
    github: '',
    video: '',
    images: [
      '',
      '',
    ],
  },
  {
    id: 'library-management',
    title: 'Library Management System with Security',
    date: "Sep '24 — Dec '24",
    shortDescription:
      'Secure book borrowing system using JWT, Spring Boot, and React.',
    fullDescription:
      'The Library Management System is a secure web app with RBAC. Admins manage books using CRUD operations, while users can view and borrow books. Users track their borrowing history via JWT tokens, and admins see all borrowed books with return status. Redux handles state management for borrowing and returning books.',
    tech: ['React', 'Spring Boot', 'JWT', 'Redux'],
    github:
      'https://github.com/Shubhamadmane05/Shubhamadmane05-Library-Management-System-with-Security',
    video: '',
    images: [''],
  },
  {
    id: 'MyPortfolio',
    title:"MyPortfolio",
    shortDescription:'A responsive portfolio showcasing my skills, experience, and projects using React & Bootstrap.',
    fullDescription:'MyPortfolio is a responsive web app built with React.js and Bootstrap to showcase my profile, skills, experience, and projects. It features smooth animations using AOS and is optimized for all screen sizes to deliver a clean, professional online presence.',
    tech: ['React', 'bootstrap'],
    github:'https://github.com/Shubhamadmane05/MyPortfolio',
    video: '/assets/projectImages/myportfolioVideo.mp4',
    images: ['/assets/projectImages/portfolioImg1.png',
              '/assets/projectImages/portfolioImg2.png',
              '/assets/projectImages/portfolioImg3.png',
              '/assets/projectImages/portfolioImg4.png',
     ],
  },

  {
    id:'SmartFlashcardSystem',
    title: 'SmartFlashcardSystem',
    shortDescription: 'Smart flashcard app with auto-subject detection, REST APIs, and MySQL for efficient learning.',
    fullDescription:'A Spring Boot backend system where students can add flashcards with just a question and answer. The subject is auto-detected using keyword-based logic. Flashcards are stored in MySQL and can be retrieved by subject in shuffled form via REST APIs. Designed for efficient learning and subject-wise review.',
    tech: ['Java', 'spring boot', 'MySQL', 'Postman'],
    github:'https://github.com/Shubhamadmane05/SmartFlashcardSystem',
    video:'',
    images:'',
  },
  {
    id:'Admin panel',
    title: 'Admin-panel-using-Next.js-with-typescript-full-stack-application',
    shortDescription: 'Real-time admin panel with Next.js, WebSockets, NextAuth, Prisma, and MySQL',
    fullDescription:'A scalable and real-time admin panel built with Next.js and TypeScript, featuring WebSockets for live notifications, role-based authentication, and a dynamic dashboard. The backend is powered by Node.js, Prisma, and MySQL, ensuring efficient data management. Implements NextAuth for authentication, REST APIs for seamless communication, and Tailwind',
    tech: ['react ts', 'next js','node js', 'MySQL','prima', 'websocket', 'Postman',],
    github:'https://github.com/Shubhamadmane05/admin-panel-using-Next.js-with-typescript-full-stack-application',
    video:'',
    images:'',
  },
  {
    id:'Login Auth',
    title: 'This is a full-stack authentication and role-based access control (RBAC) project.(Login Auth)',
    shortDescription: 'Real-time admin panel with Next.js, WebSockets, NextAuth, Prisma, and MySQL',
    fullDescription:'A role-based login system with JWT authentication. Users log in with username & password. Admins can access both admin and student dashboards, while students access only theirs. Frontend routes are protected based on roles. Built with a clean Bootstrap UI and includes a 404 Not Found page.',
    tech: ['Java', 'Spring boot', 'MySQL','bootstrap', 'JWT', 'Postman',],
    github:'https://github.com/Shubhamadmane05/loginAuth',
    video:'',
    images:'',
  },
];
