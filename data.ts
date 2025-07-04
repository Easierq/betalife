export type Project = {
  id: number;
  bg_image?: string;
  img1: string;
  img2: string;
  img3?: string;
  img4?: string;
  title: string;
  subtitle: string;
  brief: string;
  href?: string;
  link?: string;
  videoUrl: string;
  description: string;
  about?: string;
  isAndroid?: boolean;
  slug: string;
  framework?: string;
  database?: string;
  ORM?: string;
  styling?: string;
  category?: string;
  type?: string;
  others?: string;
  pictures?: string[];
  howtos?: string[];
  withStripe?: boolean;
  withLiveKit?: boolean;
  forsale?: boolean;
  inProgress?: boolean;
};

export type Projects = Project[];

export const data: Projects = [
  // Duolingo
  {
    id: 1,
    bg_image: "/duolingo/1x.png",
    img1: "/duolingo/1.png",
    img2: "/duolingo/2.png",
    img3: "/duolingo/3.png",
    img4: "/duolingo/4.png",
    title: "Langling - Duolingo inspired sass language learning app clone",
    subtitle: "Language Learning App Clone",
    brief:
      "A Duolingo-inspired language learning app built with Next.js 13 that offers interactive lessons, progress tracking, and gamification features.",
    href: "/1",
    link: "https://langling.vercel.app/",
    videoUrl: "/v.mp4",
    description:
      "This project is a full-stack clone of the popular language learning platform Duolingo, developed using Next.js 13 for its server-rendered capabilities and optimized performance. The app provides users with interactive lessons in multiple languages, utilizing Drizzle ORM and Neon DB for efficient data handling. It incorporates ElevenLabs AI for generating language exercises, creating a personalized learning experience. Users can engage in speaking, listening, and writing exercises with gamified elements such as points, levels, and streaks. The app also includes a comprehensive progress tracking dashboard, allowing users to monitor their learning journey and adjust goals accordingly.",
    slug: "dualingo-clone-project",
    withStripe: true,
    framework: "Next js, React js.",
    database: "Neon DB",
    ORM: "Drizzle",
    styling: "Css, Tailwind",
    category: "Language learning",
    type: "Clone",
    others: "Stripe, Elevenlabs",
    pictures: [
      "/img/next.svg",
      "/img/react.svg",
      "/img/type.svg",
      "/img/driz.png",
      // "/img/tss.svg",
      "/img/neon.png",
      "/img/elev.svg",
    ],
    howtos: [
      "Sign up for a new account using your email address or a social media login. This will allow you to track your progress and access personalized lessons. ",
      "Select the language you want to learn from the available options. You can start with the basics or take a placement test to find your level. ",
      "Begin with interactive lessons that include speaking, listening, and writing exercises. Earn points and unlock new levels as you complete each lesson. ",
      "Customize your learning experience by setting daily or weekly goals. The app will send reminders to help you stay on track and maintain your learning streak. ",
      "Visit the dashboard to view your learning history, achievements, and progress over time. Use this information to identify areas for improvement and adjust your learning strategy.",
    ],
  },
  // Soonest
  {
    id: 5,
    bg_image: "/soonest/1x.png",
    img1: "/soonest/1.png",
    img2: "/soonest/2.png",
    img3: "/soonest/3.png",
    img4: "/soonest/4.png",
    title: "Soonest - Modern Real Estate Platform",
    subtitle: "Real Estate web application",
    brief:
      "Soonest is a full-featured real estate platform built using the MERN stack and other technologies",
    href: "/1",
    link: "https://soonest-test.vercel.app/",
    videoUrl: "/v.mp4",
    description:
      "This is a full-featured real estate platform built with the MERN stack, leveraging Redux for state management. It allows users to explore and search for properties based on their specific needs. Registered users can upgrade to agent accounts to list and manage properties, ensuring a seamless experience for both buyers and sellers. The platform offers a responsive and user-friendly interface, making property discovery and management efficient and intuitive.",
    slug: "soonest-real-estate",
    withStripe: false,
    framework: "React js.",
    database: "MongoDB",
    ORM: "Mongoose",
    styling: "Sass, Css",
    category: "Utility",
    type: "Real estate",
    pictures: [
      "/img/react.svg",
      "/img/type.svg",
      "/img/sass.svg",
      "/img/css.svg",
      "/img/mgse.svg",
      "/img/mgb.svg",
    ],
    howtos: [
      "Users sign up by providing their name, email, password, and other details. After registering, they log in using their credentials to access the platform. ",
      "Users can browse the homepage for featured properties or use filters (location, price, property type, etc.) to refine their search. Clicking on a property opens a detailed page with images, descriptions, pricing, and agent details.",
      "Users can save properties they are interested in by clicking the 'Bookmark' or 'Save' button. Bookmarked properties are accessible in their profile for easy access later.",
      "Users can view the agent's contact information on the property page. They can send a direct message or request a call back from the agent.",
      "A non-agent user can apply to upgrade their account to an agent. Once approved, they gain access to property listing features.",
      "Agents can add new properties by providing details like price, location, and images. They can manage, edit, or remove their listings from their dashboard.",
    ],
  },
  // Soonest-android
  // {
  //   id: 5,
  //   bg_image: "/duo.png",
  //   img1: "/i.png",
  //   img2: "/i.png",
  //   img3: "/i.png",
  //   img4: "/i.png",
  //   title: "Soonest - Modern Real Estate Platform (Android app)",
  //   subtitle: "Real Estate web application (Android app)",
  //   brief:
  //     "Soonest is a full-featured real estate platform built using the React native/MERN and other similar technologies",
  //   href: "/1",
  //   videoUrl: "/v.mp4",
  //   description:
  //     "This is a full-featured real estate (Soonest web app android version) platform built with the MERN stack, leveraging Redux for state management. It allows users to explore and search for properties based on their specific needs. Registered users can upgrade to agent accounts to list and manage properties, ensuring a seamless experience for both buyers and sellers. The platform offers a responsive and user-friendly interface, making property discovery and management efficient and intuitive.",
  //   slug: "soonest-android-app",
  //   withStripe: false,
  //   framework: "React js.",
  //   database: "MongoDB",
  //   ORM: "Mongoose",
  //   category: "Utility",
  //   type: "Real estate",
  //   pictures: [
  //     "/img/react.svg",
  //     "/img/rnative.svg",
  //     "/img/js.svg",
  //     "/img/mgse.svg",
  //     "/img/mgb.svg",
  //   ],
  //   howtos: [
  //     "Users sign up by providing their name, email, password, and other details. After registering, they log in using their credentials to access the platform. ",
  //     "Users can browse the homepage for featured properties or use filters (location, price, property type, etc.) to refine their search. Clicking on a property opens a detailed page with images, descriptions, pricing, and agent details.",
  //     "Users can save properties they are interested in by clicking the 'Bookmark' or 'Save' button. Bookmarked properties are accessible in their profile for easy access later.",
  //     "Users can view the agent's contact information on the property page. They can send a direct message or request a call back from the agent.",
  //     "A non-agent user can apply to upgrade their account to an agent. Once approved, they gain access to property listing features.",
  //     "Agents can add new properties by providing details like price, location, and images. They can manage, edit, or remove their listings from their dashboard.",
  //   ],
  // },
  // Estater
  {
    id: 6,
    bg_image: "/estater/1x.png",
    img1: "/estater/1.png",
    img2: "/estater/2.png",
    img3: "/estater/3.png",
    img4: "/estater/4.png",
    title: "Estater - Simplified Real Estate Platform",
    subtitle: "An easy to navigate real estate app",
    brief:
      "Estater is a straightforward real estate platform designed for seamless property searching",
    href: "/1",
    link: "https://estater.vercel.app/",
    videoUrl: "/v.mp4",
    description:
      "This is a straightforward real estate platform designed for seamless property searching. Built using React js, Prisma ORM and mongoDB database, it allows users to explore properties based on their preferences, such as location, price, and property type. Unlike traditional platforms, only the website owner (admin) has the authority to add and manage property listings. This ensures verified and high-quality listings for users while maintaining a simple and efficient browsing experience.",
    slug: "estater-real-estate",
    withStripe: false,
    framework: "React js.",
    database: "MongoDB",
    ORM: "Prisma",
    styling: "Css, Sass",
    category: "Utility",
    type: "Productivity",
    pictures: [
      "/img/react.svg",
      "/img/js.svg",
      "/img/sass.svg",
      "/img/mgse.svg",
      "/img/mgb.svg",
    ],
    howtos: [
      "Users land on the homepage and browse featured properties. They can use filters (location, price range, property type) to refine their search.",
      "Clicking on a property opens a detailed page with images, descriptions, and pricing. Contact details or an inquiry form may be available for further discussions.",
      "Users can save properties they are interested in for quick access later.",
      "Users can reach out via a contact form or provided details to inquire about a property.",
      "The website owner (admin) has exclusive access to add, edit, or remove property listings from a secure dashboard.",
    ],
  },
  // Trello
  {
    id: 7,
    bg_image: "/trello/1x.png",
    img1: "/trello/1.png",
    img2: "/trello/2.png",
    img3: "/trello/3.png",
    img4: "/trello/4.png",
    title: "TaskFlow - Trello-like Task Management Platform",
    subtitle: "Productivity and Task-management App Clone",
    brief:
      "A Trello-like productivity app that allows users to mange tasks, and projects.",
    href: "/1",
    link: "https://frilio.vercel.app/",
    videoUrl: "/v.mp4",
    description:
      "TaskFlow is a modern task management web application built with Next.js, Tailwind CSS, and Clerk for authentication. It provides an intuitive drag-and-drop interface for managing tasks efficiently. Users can create boards, add lists, and organize tasks with cards—similar to Trello. With a user-friendly design and seamless authentication, TaskFlow makes project collaboration and personal task management effortless.",
    slug: "trello-clone-project",
    withStripe: true,
    framework: "Next js, React js.",
    database: "Neon DB",
    ORM: "Prisma",
    styling: "Css, Tailwind",
    category: "Task Management",
    type: "Clone",
    others: "Stripe, Shadcn UI",
    pictures: [
      "/img/next.svg",
      "/img/react.svg",
      "/img/type.svg",
      "/img/tss.svg",
      "/img/prisma.svg",
      "/img/neon.png",
    ],
    howtos: [
      "Users register using Clerk authentication (email/password, social login, etc.). Once logged in, they are redirected to their dashboard.",
      "Users can create boards to organize projects. Each board represents a workspace where tasks are managed.",
      "Within a board, users can create lists (e.g., 'To Do,' 'In Progress,' 'Done'). Lists help structure tasks in different stages of completion.",
      "Users can add task cards under lists, including titles, descriptions, due dates, and labels. Cards can be dragged and dropped between lists to update their status.",
      "Users can edit card details or delete them when no longer needed. Additional features like comments, attachments, and subtasks can be included.",
      "Users can invite others to collaborate on boards. Each member can add, edit, and move tasks based on permissions.",
    ],
  },
  // Zentry
  {
    id: 8,
    bg_image: "/zentry/1x.png",
    img1: "/zentry/1.png",
    img2: "/zentry/2.png",
    img3: "/zentry/3.png",
    img4: "/zentry/4.png",
    title: "Zentry Landing Page Clone",
    subtitle: "Gaming platform landing page",
    brief: "A zentry landing page inspired clone",
    href: "/1",
    link: "https://zental.vercel.app/",
    videoUrl: "/v.mp4",
    description:
      "This project is a clone of the Zentry platform landing page, built with React, Tailwind CSS, GSAP, and other modern web technologies. It features smooth animations, responsive design, and optimized performance to replicate the original Zentry experience. The project showcases interactive UI elements, scroll-based animations, and seamless responsiveness for an engaging user experience.",
    slug: "zentry-clone-project",
    withStripe: false,
    framework: "Next js, React js.",
    styling: "Css, Tailwind",
    category: "Landing page",
    type: "Clone",
    pictures: [
      "/img/next.svg",
      "/img/react.svg",
      "/img/js.svg",
      "/img/gsap.svg",
      "/img/tss.svg",
    ],
    howtos: [
      "Scroll through the sections of the page to experience the visually appealing effects and animations",
    ],
  },
  // Foodi
  {
    id: 9,
    bg_image: "/foodi/1x.png",
    img1: "/foodi/11.png",
    img2: "/foodi/1.png",
    title: "Foodii - Modern Restaurant Platform UI",
    subtitle: "Restaurant platform UI design",
    brief:
      "Foodii is a sleek and modern restaurant platform UI built with Next.js and Tailwind CSS.",
    href: "/1",
    link: "https://fudee.vercel.app/",
    videoUrl: "/v.mp4",
    description:
      "This is a sleek and modern restaurant platform UI built with Next.js and Tailwind CSS. Designed for restaurants that specialize in pizza, burgers, and pasta, the platform provides an intuitive and engaging user experience. It includes essential pages such as the homepage, menu, food details, and order page, ensuring a seamless browsing and ordering process.",
    slug: "foodii-ui-design",
    withStripe: true,
    framework: "Next js, React js.",
    database: "MongoDB",
    ORM: "Prisma",
    styling: "Css, Tailwind",
    category: "Restaurant",
    type: "Business",
    others: "Stripe, Shadcn UI",
    pictures: [
      "/img/next.svg",
      "/img/react.svg",
      "/img/type.svg",
      "/img/tss.svg",
      "/img/neon.png",
    ],
    howtos: [
      "Users see a visually appealing hero section with featured dishes. Navigation links lead to the Menu, Orders, and Contact pages.",
      "Users browse through categories: Pizza, Burgers, Pasta. Filters help narrow down choices based on preferences.",
      "Clicking on a dish opens a detailed page with descriptions, images, and pricing. Users can customize options (e.g., extra toppings, portion sizes) before adding to the cart.",
      "Users visit the Orders page to review their cart. They can adjust quantities, remove items, and proceed to checkout.",
      "The UI adapts seamlessly across devices for smooth browsing and ordering. Transitions and animations enhance the user experience.",
    ],
  },
  // 3d
  {
    id: 10,
    bg_image: "/3d/1.png",
    img1: "/3d/1.png",
    img2: "/3d/2.png",
    title: "3D Interactive Portfolio - Elevate Your Online Presence",
    subtitle: "Modern 3D Portfolio",
    brief:
      "An intractive visually appealing portfolio website built using React js and tailwind css.",
    href: "/1",
    link: "https://mythreed.vercel.app/",
    videoUrl: "/v.mp4",
    description:
      "This project is a visually stunning, interactive 3D portfolio built with React, Tailwind CSS, and Three.js (or React Three Fiber). It showcases a modern and immersive way to present your work, featuring smooth animations, dynamic UI elements, and an engaging user experience. With dedicated pages for Projects, About Me, and Contact, this portfolio allows users to navigate seamlessly through your skills, work, and background.",
    slug: "3d-portfolio-project",
    withStripe: false,
    framework: "React js.",
    styling: "Css, Tailwind",
    category: "Portfolio",
    pictures: ["/img/react.svg", "/img/js.svg", "/img/tss.svg"],
    howtos: [
      "Users are greeted with a scene 3D hero section. A smooth scroll or navigation menu leads to different modals which leads to different page.",
      "The projects page features some dummy projects",
      "The 'About' page highlights the skills and career timeline.",
    ],
  },
  // Appltv
  {
    id: 11,
    bg_image: "/appletv/1x.png",
    img1: "/appletv/1.png",
    img2: "/appletv/2.png",
    title: "Apple TV+ Landing Page Clone",
    subtitle: "Modern landing page clone",
    brief:
      "This project is a minimal clone of the Apple TV+ landing page, built with Next.js and Tailwind CSS.",
    href: "/1",
    link: "https://tvapple.vercel.app/",
    videoUrl: "/v.mp4",
    description:
      "This project is a pixel-perfect clone of the Apple TV+ landing page, built with Next.js, Tailwind CSS, and Framer Motion for smooth animations. It replicates the sleek, high-end feel of Apple's design, featuring cinematic visuals, scroll-based animations, and interactive UI elements.",
    slug: "appletv-landing-page",
    withStripe: false,
    framework: "Next js, React js.",
    styling: "Css, Tailwind",
    category: "Landing page",
    type: "Clone",
    pictures: [
      "/img/next.svg",
      "/img/react.svg",
      "/img/type.svg",
      "/img/tss.svg",
    ],
    howtos: [
      "Scroll through the sections of the page to experience the visually appealing effects as framer motion animations bring element into view",
    ],
  },
  // Simplify
  {
    id: 12,
    bg_image: "/simplify/1x.png",
    img1: "/simplify/1.png",
    img2: "/simplify/2.png",
    img3: "/simplify/3.png",
    img4: "/simplify/4.png",
    title: "Simplify - Digital Skills eLearning Platform",
    subtitle: "A modern platform for learing digital skills",
    brief:
      "Simplfy is a modern eLearning platform designed for users to learn digital skills through interactive courses, video lessons, and quizzes.",
    href: "/1",
    link: "https://simplifyskill.vercel.app/",
    videoUrl: "/v.mp4",
    description:
      "This is an interactive eLearning platform focused on 1-on-1 sessions for learning digital skills. Built with Next.js, Tailwind CSS, and Framer Motion, it provides a seamless booking system for personalized coaching. Users can browse available mentors, schedule sessions, and receive direct guidance tailored to their learning needs.",
    slug: "simplify-website",
    withStripe: false,
    framework: "Next js, React js.",
    database: "MongoDB",
    ORM: "Prisma",
    styling: "Css, Tailwind",
    category: "Digital skills",
    type: "Startup",
    others: "Shadcn UI",
    pictures: [
      "/img/next.svg",
      "/img/react.svg",
      "/img/type.svg",
      "/img/tss.svg",
      "/img/prisma.svg",
      "/img/mgb.svg",
    ],
    howtos: [
      "Users register and log in to access personalized learning.",
      "Users explore different digital skill courses.",
      "Clicking on a enroll button opens the Course Details modal, where users can enroll after making payment for paid courses.",
      "Users receive a calendar invite and meeting link for the live session.",
      "After finishing lessons and passing quizzes, users receive certificates.",
    ],
  },
  // Wordle
  {
    id: 13,
    bg_image: "/wordle/1x.png",
    img1: "/wordle/1.png",
    img2: "/wordle/2.png",
    img3: "/wordle/3.png",
    img4: "/wordle/4.png",
    title: "A Wordle Clone Web App",
    subtitle: "Guessing game clone Web App",
    brief:
      "Wordee is a Wordle-inspired word puzzle game, built with React and Tailwind CSS, ",
    href: "/1",
    link: "https://wordee.vercel.app/",
    videoUrl: "/v.mp4",
    description:
      "Wordee is a Wordle-inspired word puzzle game, built with React and Tailwind CSS. It offers an interactive and engaging word-guessing experience with a clean and responsive UI. Players must guess a hidden word within a limited number of attempts, with real-time feedback guiding them toward the correct answer.",
    slug: "wordle-clone-project",
    framework: "Next js, React js.",
    database: "MongoDB",
    styling: "Css, Tailwind",
    category: "Game App",
    type: "Clone",
    pictures: [
      "/img/next.svg",
      "/img/react.svg",
      "/img/css.svg",
      "/img/mgb.svg",
    ],
    howtos: [
      "Users see a brief game introduction modal and a Start Game button.",
      "Users enter a 5-letter word and receive instant feedback. They continue guessing until they either solve the word or run out of attempts.",
      "If they guess correctly, a victory message appears. If they fail, the correct word is revealed, and they can try again.",
    ],
  },
  // Twitch
  {
    id: 2,
    bg_image: "/twitch/1x.png",
    img1: "/twitch/1.png",
    img2: "/twitch/2.png",
    img3: "/twitch/3.png",
    img4: "/twitch/4.png",
    title: "Strima - Twitch Clone",
    subtitle: "Live Streaming Platform Clone",
    brief:
      "A full-stack Twitch-like live streaming platform built with Next.js 13, LiveKit, and Neon DB, enabling users to broadcast and watch live content.",
    href: "/1",
    link: "https://strima.vercel.app/",
    videoUrl: "/v.mp4",
    description:
      "This project replicates the core functionalities of Twitch, leveraging Next.js 13 for its modern UI capabilities and server-side rendering. The app allows users to broadcast live streams using LiveKit for real-time video and audio communication, and it integrates with OBS Studio for professional-quality streaming. The backend is powered by Prisma and Neon DB, ensuring efficient data storage and retrieval. Users can explore streams by category, follow their favorite channels, and interact via real-time chat. The platform also supports user registration, channel creation, and follower systems, providing a comprehensive streaming experience.",
    slug: "twitch-clone-project",
    framework: "Next, React.",
    database: "Neon DB",
    ORM: "Prisma",
    styling: "Css, Tailwind",
    category: "Streaming App",
    type: "Clone",
    others: "Uploadthing, Livekit, Clerk",
    pictures: [
      "/img/next.svg",
      "/img/react.svg",
      "/img/type.svg",
      "/img/tss.svg",
      "/img/prisma.svg",
      "/img/lk.svg",
      "/img/mgb.svg",
    ],
    howtos: [
      "Create an account using your email or social media credentials. Log in to access personalized content and interact with the community. ",
      "Browse live streams across various categories, including gaming, music, and creative arts. Use filters and search to find content that interests you. ",
      "Follow your favorite channels to receive notifications when they go live. Customize your feed to prioritize the content you love. ",
      "Join the chat during live streams to interact with streamers and other viewers. Use emotes and commands to enhance your chat experience. ",
      "Start your own live stream by setting up a channel and configuring your streaming software. Share your gameplay, creative process, or other content with the community.",
    ],
  },
  // Discord
  {
    id: 3,
    bg_image: "/discord/1x.png",
    img1: "/discord/1.png",
    img2: "/discord/2.png",
    img3: "/discord/3.png",
    img4: "/discord/4.png",
    title: "Discord Clone",
    subtitle: "Chat and VoIP App Clone",
    brief:
      "A Discord-inspired chat and VoIP application developed with Next.js 13, LiveKit, and Prisma, offering real-time communication in servers and private messages.",
    href: "/1",
    link: "https://ds-team.onrender.com",
    videoUrl: "/v.mp4",
    description:
      "This project is a clone of Discord, featuring text, voice, and video communication in a full-stack application built with Next.js 13. Utilizing LiveKit for real-time interaction and Prisma with MongoDB for data management, the app supports server creation, channel organization, and role management. Users can join servers, participate in channel discussions, and engage in private messaging. The app's integration with Next.js 13 enables dynamic routing and efficient rendering, enhancing user experience. With features like direct messaging, role assignments, and media sharing, this clone provides a robust platform for community building and communication.",
    slug: "discord-clone-project",
    framework: "Next, React.",
    database: "Mongo DB",
    ORM: "Prisma",
    styling: "Css, Tailwind",
    category: "Social media",
    type: "Clone",
    others: "Uploadthing, Livekit, Clerk",
    pictures: [
      "/img/next.svg",
      "/img/react.svg",
      "/img/type.svg",
      "/img/tss.svg",
      "/img/prisma.svg",
      "/img/lk.svg",
      "/img/mgb.svg",
    ],
    howtos: [
      "Sign up for an account using your email address or a social media login. Customize your profile with a username and avatar. ",
      "Explore public servers related to your interests or join private ones via invitation. Servers are organized into channels for different topics and activities. ",
      "Communicate with others through text, voice, and video channels. Use direct messaging for private conversations with friends. ",
      "Assign roles to members within a server to manage permissions and access. Customize roles to fit the structure and needs of your community. ",
      "Upload files, share links, and use bots to enhance your server's functionality. Engage with your community through events, polls, and announcements.",
    ],
  },
  // Notion
  {
    id: 4,
    bg_image: "/notion/1x.png",
    img1: "/notion/1.png",
    img2: "/notion/2.png",
    title: "Notion Clone",
    subtitle: "INotify - Productivity and Note-Taking App Clone",
    brief:
      "A Notion-like productivity app that allows users to create, organize, and collaborate on notes, tasks, and projects.",
    href: "/1",
    link: "https://inotefy.vercel.app/",
    videoUrl: "/v.mp4",
    description:
      "This project replicates Notion's flexible productivity features, offering a full-stack solution built with Next.js 13. The app provides a block-based editor for creating rich media content, tasks, and databases. Using Convex and Edgestore, the app supports real-time collaboration and data synchronization, enabling seamless teamwork. Users can create and organize content within their workspace, customize pages, and utilize templates for efficient workflow management. With the combination of dynamic rendering and real-time updates, this Notion clone delivers a comprehensive tool for personal and professional productivity.",
    slug: "notion-clone-project",
    framework: "Next, React.",
    database: "Convex",
    styling: "Css, Tailwind",
    category: "Productivity",
    type: "Clone",
    others: "Edgestore, Clerk",
    pictures: [
      "/img/next.svg",
      "/img/react.svg",
      "/img/type.svg",
      "/img/tss.svg",
      "/img/cvx.png",
    ],
    howtos: [
      "Sign up using your email or a third-party authentication provider. Access your workspace from any device with internet connectivity. ",
      "Set up your workspace by creating pages and subpages. Use templates to quickly add notes, tasks, databases, and other content types. ",
      "Edit pages using the block-based editor to add text, images, tables, and more. Drag and drop blocks to reorganize content as needed. ",
      "Invite team members to join your workspace and collaborate in real time. Assign tasks, leave comments, and track changes to stay coordinated. ",
      "Create databases to track projects, tasks, and goals. Use filters, sorting, and views to organize information and keep everything on track.",
    ],
  },
  // Storeman Admin
  // {
  //   id: 14,
  //   bg_image: "/twitch.png",
  //   img1: "/i.png",
  //   img2: "/i.png",
  //   img3: "/i.png",
  //   img4: "/i.png",
  //   title: "StoreMan - Admin Dashboard",
  //   subtitle: "Store Dashboard",
  //   brief:
  //     "StoreMan is a full-featured eCommerce admin dashboard built with Next.js, Tailwind CSS, and React Query (or SWR) for data fetching. ",
  //   href: "/1",
  //   link: "http://www.goal.com",
  //   videoUrl: "http://www.goal.com",
  //   description:
  //     "This is a full-featured eCommerce admin dashboard built with Next.js, Tailwind CSS, and React Query (or SWR) for data fetching. It provides an intuitive interface for managing store content, such as billboards (hero banners), products, categories, and orders. The dashboard serves as the backend for a separate store UI, which fetches data dynamically from its API to display products and billboards in real-time.",
  //   slug: "storeman-admin",
  //   framework: "Next js, React js.",
  //   styling: "Css, Tailwind",
  //   category: "Ecommerce",
  //   type: "Ecommerce",
  //   pictures: [
  //     "/img/next.svg",
  //     "/img/react.svg",
  //     "/img/type.svg",
  //     "/img/tss.svg",
  //     "/img/prisma.svg",
  //   ],
  //   howtos: [
  //     "Login to the Admin Dashboard.",
  //     "Manage Store Content: Add billboards, products, and categories.",
  //     "Track Orders & Sales.",
  //     "API Automatically Updates the Storefront.",
  //   ],
  // },
  // Storeman Front
  // {
  //   id: 15,
  //   bg_image: "/twitch.png",
  //   img1: "/i.png",
  //   img2: "/i.png",
  //   img3: "/i.png",
  //   img4: "/i.png",
  //   title: "StoreMan - Ecommerce website",
  //   subtitle: "Store website",
  //   brief:
  //     "StoreMan is a full-featured eCommerce admin dashboard built with Next.js, Tailwind CSS, and React Query (or SWR) for data fetching.",
  //   href: "/1",
  //   link: "http://www.goal.com",
  //   videoUrl: "http://www.goal.com",
  //   description:
  //     "This is a full-featured eCommerce admin dashboard built with Next.js, Tailwind CSS, and React Query (or SWR) for data fetching. It provides an intuitive interface for managing store content, such as billboards (hero banners), products, categories, and orders. The dashboard serves as the backend for a separate store UI, which fetches data dynamically from its API to display products and billboards in real-time.",
  //   slug: "storeman-web-app",
  //   framework: "Next, React.",
  //   styling: "Css, Tailwind",
  //   category: "Ecommerce",
  //   type: "Ecommerce",
  //   pictures: [
  //     "/img/next.svg",
  //     "/img/react.svg",
  //     "/img/type.svg",
  //     "/img/tss.svg",
  //     "/img/prisma.svg",
  //   ],
  //   howtos: [
  //     "Homepage Displays Billboards & Featured Products.",
  //     "Browse & Search for Products.",
  //     "Click on a product to navigate to product details.",
  //     "Add product to cart and checkout using Stripe.",
  //   ],
  // },
];
