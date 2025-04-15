
import {
  discord,
  github,
  insta,
  telegram,
  unicron,
  ua,
  feelHealthy,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  portfolio,
  html,
  js,
  reactC,
  nextjs,
  mern,
  pen,
  themeicon,
  security,
  bell,
  react,
  htmlBook,
  jsbook,
} from "./images";


export const sidelinks = [
  { link: "profile", img: pen },
  { link: "Themes", img: themeicon },
  { link: "Notifications", img: bell },
  { link: "Security", img: security },
];


export const socials = [
  {
    img: github,
    path: "https://github.com/rootfinchreesePOI5?tab=repositories",
    color: "linear-gradient(to right, #000000, #434343)",
    name: "github",
  },
  {
    img: insta,
    path: "https://www.instagram.com/infinitevoid_sg/?hl=en",
    color: "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
    name: "insta",
  },
  {
    img: discord,
    path: "https://discord.com/channels/@me",
    color: "linear-gradient(to right, #6441a5, #2a0845)",
    name: "discord",
  },
  {
    img: telegram,
    path: "https://web.telegram.org/a/",
    color: "linear-gradient(to right, #00d2ff, #928dab)",
    name: "telegram",
  },
];






export const MyProjects = [
  {
    name: "feelHealthy",
    tools: ["React js", "Tailwind Css", "Mongodb", "Node Js", "Express js"],
    des: "It is a doctors appointment panel which helps you to Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.",
    repo: "https://github.com/rootfinchreesePOI5/feelHealthy",
    mainImg: feelHealthy,
    link: "https://healthyfeeling.netlify.app/",
    category: ["React js", "FullStack"],
  },
  {
    name: "Under-Armour",
    tools: ["React js", "Tailwind Css", "Mongodb", "Node Js", "Express js"],
    des: "An e-commerce clone website of Under Armour that provides A wide range of products to meet the needs of athletes not only during training but also in everyday life.",
    repo: "https://github.com/rootfinchreesePOI5/Under-Armour",
    mainImg: ua,
    link: "https://ua-us.netlify.app/",
    category: ["React js", "FullStack"],
  },
  {
    name: "Unicron",
    tools: ["React js", "Css", "Mongodb", "Node Js", "Express js"],
    des: "A blogging Website that believes that every story we tell is a reflection of our team and helps you share your ideas to the world",
    repo: "https://github.com/rootfinchreesePOI5/Unicron",
    mainImg: unicron,
    link: "https://modernmoon.netlify.app/",
    category: ["React js", "FullStack"],
  },
  {
    name: "Portfolio",
    tools: ["React js", "Css", "Mongodb", "Node Js", "Express js"],
    des: "A blogging Website that believes that every story we tell is a reflection of our team and helps you share your ideas to the world",
    repo: "https://infinitedevportfolio.vercel.app/",
    mainImg: portfolio,
    link: "https://modernmoon.netlify.app/",
    category: ["Next js"],
  },
];

export const testimonials = [
  {
    img: client1, // Replace with actual image URL
    experience:
      "Working with Abdiaziz was an absolute pleasure! He delivered the project on time and exceeded my expectations. I learned so much from his guidance.",
    name: "Emily Smith",
    courseFinished: "Web Development",
  },
  {
    img: client2, // Replace with actual image URL
    experience:
      "Abdiaziz has a great eye for detail and is highly skilled in frontend development. His lessons are thorough and easy to understand. Highly recommend!",
    name: "John Smith",
    courseFinished: "JavaScript Programming",
  },
  {
    img: client3, // Replace with actual image URL
    experience:
      "Very professional and dedicated. Abdiaziz ensured all my questions were answered and provided excellent support during my learning journey.",
    name: "Michael Brown",
    courseFinished: "React Development",
  },
  {
    img: client4, // Replace with actual image URL
    experience:
      "Abdiaziz’s expertise in web development helped me master key frontend skills. Fantastic experience and great learning materials!",
    name: "Emily Davis",
    courseFinished: "Frontend Web Design",
  },
  {
    img: client5, // Replace with actual image URL
    experience:
      "An exceptional mentor who truly cares about student success. I’m very impressed with how much I’ve learned through his courses.",
    name: "David Wilson",
    courseFinished: "Full-Stack Development",
  },
  {
    img: client6, // Replace with actual image URL
    experience:
      "Abdiaziz is a highly skilled developer with great teaching abilities. His lessons were clear, concise, and incredibly valuable for my career growth.",
    name: "Sarah Johnson",
    courseFinished: "UI/UX Design",
  },
];




export const filterBytype = ["All", "React js", "Next js", "FullStack"];

export const courses = [
  {
    img: html,
    name: "HTML Mastery: From Beginner to Pro",
    length: 6,
    completion: 0,
    deadline: "2 weeks",
    startDate: "2025-04-05",
    category: "Frontend Development",
    description:
      "Master HTML from scratch! Learn how to structure web pages, work with forms, tables, multimedia, and best SEO practices.",
    difficulty: "Beginner to Advanced",
    instructor: "John Doe",
    outcomes: [
      "Understand HTML tags, attributes, and forms.",
      "Master CSS styling, positioning, and animations.",
      "Build fully responsive websites using Flexbox & Grid.",
      "Implement best practices for accessibility & SEO."
    ],  
    syllabus: [
      {
        week: 1,
        topic: "Introduction to HTML",
        content: [
          { name: "What is HTML?", duration: 1 , completed: false },
          { name: "Setting Up an HTML File", duration: 2 , completed: false},
          { name: "HTML Elements & Tags", duration: 2 , completed: false},
          { name: "Block vs Inline Elements", duration: 2 , completed: false},
          { name: "Attributes & Metadata", duration: 3 , completed: false}
        ]
      },
      {
        week: 2,
        topic: "HTML Text & Formatting",
        content: [
          { name: "Headings & Paragraphs", duration: 1 , completed: false},
          { name: "Lists (Ordered & Unordered)", duration: 2 , completed: false},
          { name: "Text Formatting (Bold, Italics, Underline)", duration: 2 , completed: false},
          { name: "HTML Entities & Symbols", duration: 2 , completed: false}
        ]
      },
      {
        week: 3,
        topic: "HTML Links, Images & Media",
        content: [
          { name: "Anchor Tags & External Links", duration: 2 , completed: false},
          { name: "Internal Links & Navigation", duration: 2 , completed: false},
          { name: "Adding Images & Optimization", duration: 2 , completed: false},
          { name: "Embedding Videos & Audio", duration: 3 , completed: false}
        ]
      },
      {
        week: 4,
        topic: "HTML Tables & Forms",
        content: [
          { name: "Creating Tables (Rows & Columns)", duration: 2 , completed: false},
          { name: "Table Headers, Footers & Borders", duration: 2 , completed: false},
          { name: "Form Elements (Inputs, Buttons, Labels)", duration: 2 , completed: false},
          { name: "Form Validation & Attributes", duration: 3 , completed: false}
        ]
      },
      {
        week: 5,
        topic: "HTML Advanced Topics",
        content: [
          { name: "HTML5 Semantic Elements", duration: 2 , completed: false},
          { name: "Accessibility & ARIA", duration: 2 , completed: false},
          { name: "SEO Best Practices", duration: 2 , completed: false},
          { name: "Meta Tags & Open Graph Protocol", duration: 3 , completed: false}
        ]
      },
      {
        week: 6,
        topic: "Building a Full HTML Website",
        content: [
          { name: "Creating a Homepage", duration: 3 , completed: false},
          { name: "Building a Contact Page", duration: 3 , completed: false},
          { name: "Adding Navigation & Footer", duration: 3 , completed: false},
          { name: "Deploying Your Website", duration: 3 , completed: false}
        ]
      }
    ],
    
    price: "Free",
    ratings: 4.6,
    
    reviews: [
      { user: "Alice", comment: "Perfect for beginners!", rating: 5 },
      { user: "Bob", comment: "Very detailed and well-structured.", rating: 4.5 }
    ],
    
    resources: [
      {
        type: "PDF",
        name: "HTML Cheat Sheet",
        img: htmlBook,
        link: "https://www3.cs.stonybrook.edu/~pramod.ganapathi/doc/CSE102/CSE102-CheatSheetHTML.pdf"
      },
    ],
    
    quizzes: [
      { title: "HTML Basics Quiz", link: "example.com/html-quiz" },
      { title: "HTML Forms & Tables Quiz", link: "example.com/html-forms-quiz" }
    ],
    
    projects: [
      { title: "Create a Personal Portfolio", description: "Build a simple portfolio website using HTML.", duration: 4 },
      { title: "Design a Contact Form", description: "Create a functional contact form with validation.", duration: 3 }
    ],

    certification: false,
    enrolled: true,
  },
    {
      img: js,
      name: "JavaScript Mastery: From Beginner to Pro",
      length: 8,
      completion: 0,
      deadline: "4 weeks",
      startDate: "2025-04-10",
      category: "Frontend Development",
      description:
        "Master JavaScript from scratch! Learn variables, functions, objects, DOM manipulation, ES6+ features, APIs, and advanced topics like async programming.",
      difficulty: "Beginner to Advanced",
      instructor: "Jane Smith",
      outcomes: [
        "Understand variables, functions, and scope.",
        "Master event handling and DOM manipulation.",
        "Work with APIs and handle asynchronous operations.",
        "Write clean and efficient JavaScript code."
      ],
      syllabus: [
        {
          week: 1,
          topic: "JavaScript Fundamentals",
          content: [
            { name: "What is JavaScript?", duration: 1 , completed: false},
            { name: "Setting Up JavaScript in HTML", duration: 1 , completed: false},
            { name: "Variables & Data Types", duration: 2 , completed: false},
            { name: "Operators & Expressions", duration: 2 , completed: false},
            { name: "Conditionals (if, else, switch)", duration: 2 , completed: false},
            { name: "Loops (for, while, do-while)", duration: 3 , completed: false}
          ]
        },
        {
          week: 2,
          topic: "Functions & Scope",
          content: [
            { name: "Declaring Functions", duration: 2 , completed: false},
            { name: "Function Parameters & Return Values", duration: 2 , completed: false},
            { name: "Arrow Functions", duration: 2 , completed: false},
            { name: "Scope & Closures", duration: 3 , completed: false}
          ]
        },
        {
          week: 3,
          topic: "JavaScript Arrays & Objects",
          content: [
            { name: "Creating & Accessing Arrays", duration: 2 , completed: false},
            { name: "Array Methods (map, filter, reduce)", duration: 3 , completed: false},
            { name: "Objects & Properties", duration: 2 , completed: false},
            { name: "Object Methods & Prototypes", duration: 3 , completed: false}
          ]
        },
        {
          week: 4,
          topic: "DOM Manipulation & Events",
          content: [
            { name: "Selecting & Modifying Elements", duration: 3 , completed: false},
            { name: "Event Listeners & Handling Events", duration: 3 , completed: false},
            { name: "Creating & Removing Elements", duration: 3 , completed: false},
            { name: "Working with Forms & Validation", duration: 3 , completed: false}
          ]
        },
        {
          week: 5,
          topic: "ES6+ & Modern JavaScript",
          content: [
            { name: "Template Literals & Destructuring", duration: 2 , completed: false},
            { name: "Spread & Rest Operators", duration: 2 , completed: false},
            { name: "Promises & Async/Await", duration: 3 , completed: false},
            { name: "Modules & Import/Export", duration: 3 , completed: false}
          ]
        },
        {
          week: 6,
          topic: "JavaScript APIs & Fetch",
          content: [
            { name: "Making HTTP Requests (Fetch API)", duration: 3 , completed: false},
            { name: "Working with JSON", duration: 2 , completed: false},
            { name: "LocalStorage & SessionStorage", duration: 2 , completed: false},
            { name: "Geolocation & Web APIs", duration: 3 , completed: false}
          ]
        },
        {
          week: 7,
          topic: "Advanced JavaScript Concepts",
          content: [
            { name: "Prototypes & Inheritance", duration: 3 , completed: false},
            { name: "Event Bubbling & Delegation", duration: 2 , completed: false},
            { name: "Error Handling & Debugging", duration: 3 , completed: false},
            { name: "Performance Optimization", duration: 3 , completed: false}
          ]
        },
        {
          week: 8,
          topic: "Building JavaScript Projects",
          content: [
            { name: "Building a To-Do App", duration: 3 , completed: false},
            { name: "Creating a Weather App using APIs", duration: 3 , completed: false},
            { name: "JavaScript Calculator", duration: 3 , completed: false},
            { name: "Deploying a JavaScript Project", duration: 3 , completed: false}
          ]
        }
      ],
      
      price: "Free",
      ratings: 4.8,
      
      reviews: [
        { user: "Michael", comment: "Great course! It covers everything!", rating: 5 },
        { user: "Sarah", comment: "Perfect for beginners and intermediates.", rating: 4.7 }
      ],
      
      resources: [
        {
          type: "PDF",
          name: "JavaScript from Beginner to Professional",
          img: jsbook,
          link: "https://www.gurukultti.org/admin/notice/javascript.pdf"
        }
      ],
      
      quizzes: [
        { title: "JavaScript Basics Quiz", link: "example.com/js-basics-quiz" },
        { title: "DOM & Events Quiz", link: "example.com/js-dom-quiz" }
      ],
      
      projects: [
        { title: "Build a To-Do List App", description: "Create a functional to-do list with local storage.", duration: 4 },
        { title: "Create a Weather App", description: "Fetch live weather data from an API.", duration: 3 }
      ],
  
      certification: false,
      enrolled: true,
    },
    {
      img: reactC,
      name: "React - The Complete Guide",
      length: 60,
      completion: 0,
      deadline: "3 months",
      startDate: "2025-04-10",
      category: "Frontend Development",
      description:
        "Master React from the ground up. Learn everything from basic components to advanced state management, performance optimization, and deployment.",
      difficulty: "Beginner to Advanced",
      instructor: "Mark Johnson",
      outcomes: [
        "Understand JSX, components, and props.",
        "Manage state effectively with useState & useReducer.",
        "Work with React Router for dynamic navigation.",
        "Optimize performance using memoization techniques.",
        "Build and deploy React applications efficiently."
      ],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to React",
          content: [
            { name: "What is React?", duration: 1 },
            { name: "Setting up React Project", duration: 2 },
            { name: "Understanding JSX", duration: 2 },
            { name: "React Components & Props", duration: 3 }
          ]
        },
        {
          week: 2,
          topic: "React State & Events",
          content: [
            { name: "State vs Props", duration: 3 },
            { name: "Handling Events in React", duration: 2 },
            { name: "Using useState Hook", duration: 3 },
            { name: "Building Interactive Components", duration: 4 }
          ]
        },
        {
          week: 3,
          topic: "React Hooks & Context API",
          content: [
            { name: "Introduction to Hooks", duration: 2 },
            { name: "useEffect and Lifecycle Methods", duration: 3 },
            { name: "Context API for Global State", duration: 4 },
            { name: "Custom Hooks", duration: 3 }
          ]
        },
        {
          week: 4,
          topic: "React Router & Navigation",
          content: [
            { name: "Setting up React Router", duration: 2 },
            { name: "Dynamic Routing & Parameters", duration: 3 },
            { name: "Protected Routes & Authentication", duration: 4 }
          ]
        },
        {
          week: 5,
          topic: "State Management with Redux",
          content: [
            { name: "Why Redux?", duration: 2 },
            { name: "Setting up Redux Toolkit", duration: 3 },
            { name: "Actions & Reducers", duration: 3 },
            { name: "Using Redux with React", duration: 4 }
          ]
        },
        {
          week: 6,
          topic: "Performance Optimization",
          content: [
            { name: "React Memoization & useMemo", duration: 3 },
            { name: "Lazy Loading Components", duration: 3 },
            { name: "Code Splitting & Optimization", duration: 4 }
          ]
        },
        {
          week: 7,
          topic: "Connecting React to APIs",
          content: [
            { name: "Fetching Data with Fetch & Axios", duration: 3 },
            { name: "Handling Errors & Loading States", duration: 3 },
            { name: "Using GraphQL with React", duration: 4 }
          ]
        },
        {
          week: 8,
          topic: "Testing React Applications",
          content: [
            { name: "Unit Testing with Jest", duration: 3 },
            { name: "Component Testing with React Testing Library", duration: 4 },
            { name: "Mocking API Calls in Tests", duration: 3 }
          ]
        },
        {
          week: 9,
          topic: "Deploying React Apps",
          content: [
            { name: "Building for Production", duration: 3 },
            { name: "Deploying with Vercel & Netlify", duration: 3 },
            { name: "CI/CD for React Applications", duration: 4 }
          ]
        }
      ],
      price: "$79",
      ratings: 4.8,
      reviews: [
        { user: "Emily", comment: "This course covers everything!", rating: 5 },
        { user: "Jake", comment: "Well-structured and detailed.", rating: 4.8 }
      ],
      resources: [
        {
          type: "E-book",
          name: "React Handbook",
          img: '',
          link: "example.com/react-handbook.pdf"
        }
      ],
      quizzes: [
        { title: "React Basics Quiz", link: "example.com/react-quiz" },
        { title: "React Advanced Quiz", link: "example.com/react-advanced-quiz" }
      ],
      certification: false,
      enrolled: false,
    },
  {
    img: nextjs,
    name: "Next.js Mastery: From Beginner to Pro",
    length: 6,
    completion: 0,
    deadline: "6 weeks",
    startDate: "2025-04-15",
    category: "Full-Stack Development",
    description:
      "Learn Next.js from scratch! Understand SSR, CSR, API routes, authentication, and advanced topics like server actions, caching, and optimization.",
    difficulty: "Beginner to Advanced",
    instructor: "John Doe",
    outcomes: [
      "Understand SSR, SSG, CSR, and ISR.",
      "Build REST APIs using Next.js API routes.",
      "Implement authentication using NextAuth.js.",
      "Deploy applications efficiently on Vercel."
    ], 
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Next.js",
        content: [
          { name: "What is Next.js?", duration: 1 },
          { name: "Setting Up a Next.js Project", duration: 1 },
          { name: "Understanding Pages & File-Based Routing", duration: 2 },
          { name: "Creating Components in Next.js", duration: 2 },
          { name: "Global Styles & CSS Modules", duration: 2 },
          { name: "Linking Pages & Navigation", duration: 2 }
        ]
      },
      {
        week: 2,
        topic: "Rendering & Data Fetching",
        content: [
          { name: "Client-Side Rendering (CSR)", duration: 2 },
          { name: "Server-Side Rendering (SSR)", duration: 3 },
          { name: "Static Site Generation (SSG)", duration: 3 },
          { name: "Incremental Static Regeneration (ISR)", duration: 3 }
        ]
      },
      {
        week: 3,
        topic: "API Routes & Middleware",
        content: [
          { name: "Creating API Routes", duration: 2 },
          { name: "Handling GET & POST Requests", duration: 2 },
          { name: "Middleware & Authentication", duration: 3 },
          { name: "Using NextAuth.js for Authentication", duration: 3 }
        ]
      },
      {
        week: 4,
        topic: "Database Integration & State Management",
        content: [
          { name: "Connecting Next.js to MongoDB", duration: 3 },
          { name: "Using Prisma with Next.js", duration: 3 },
          { name: "State Management with Context API", duration: 3 },
          { name: "Using Zustand & Redux in Next.js", duration: 3 }
        ]
      },
      {
        week: 5,
        topic: "Performance Optimization & Deployment",
        content: [
          { name: "Image Optimization with next/image", duration: 3 },
          { name: "Lazy Loading & Code Splitting", duration: 3 },
          { name: "SEO Best Practices in Next.js", duration: 3 },
          { name: "Deploying Next.js Apps on Vercel", duration: 3 }
        ]
      },
      {
        week: 6,
        topic: "Building a Full Next.js Project",
        content: [
          { name: "Creating a Blog with Next.js & Markdown", duration: 3 },
          { name: "Implementing Authentication with NextAuth.js", duration: 3 },
          { name: "Adding a Database & API Routes", duration: 3 },
          { name: "Finalizing & Deploying the Project", duration: 3 }
        ]
      }
    ],
    
    price: "Free",
    ratings: 4.9,
    
    reviews: [
      { user: "Emma", comment: "Best Next.js course out there!", rating: 5 },
      { user: "David", comment: "Everything is well-structured and explained.", rating: 4.8 }
    ],
    
    resources: [
      {
        type: "PDF",
        name: "Next.js Cheat Sheet",
        img: '',
        link: "example.com/nextjs-cheatsheet.pdf"
      }
    ],
    
    quizzes: [
      { title: "Next.js Basics Quiz", link: "example.com/nextjs-basics-quiz" },
      { title: "Next.js API & Middleware Quiz", link: "example.com/nextjs-api-quiz" }
    ],
    
    projects: [
      { title: "Build a Personal Blog", description: "Create a static blog with Markdown & Next.js.", duration: 4 },
      { title: "Build an E-Commerce Store", description: "Use Next.js, Stripe, and API routes.", duration: 5 }
    ],

    certification: false,
    enrolled: false,
  }, 
  {
    img: mern,
    name: "MERN Stack Mastery",
    length: 40,
    completion: 0,
    deadline: "2 weeks",
    startDate: "2025-05-01",
    category: "Fullstack Development",
    description:
      "Build full-stack applications using MongoDB, Express.js, React, and Node.js with hands-on projects.",
    difficulty: "Expert",
    instructor: "Michael Brown",
    outcomes: [
      "Set up a full-stack environment using the MERN stack.",
      "Build RESTful APIs with Express and Node.js.",
      "Manage MongoDB databases efficiently.",
      "Implement authentication using JWT & OAuth.",
      "Deploy full-stack applications to cloud platforms."
    ],
    syllabus: [
      {
        week: 1,
        topic: "Project 1 - Authentication System",
        content: [
          { name: "User Login & Signup", duration: 5 },
          { name: "JWT Authentication", duration: 6 }
        ]
      },
      {
        week: 2,
        topic: "Project 2 - Blogging Platform",
        content: [
          { name: "Post Creation", duration: 5 },
          { name: "Comments & Likes", duration: 6 }
        ]
      },
      {
        week: 3,
        topic: "Project 3 - E-commerce Site",
        content: [
          { name: "Product Listings", duration: 6 },
          { name: "Checkout & Payments", duration: 7 }
        ]
      },
      {
        week: 4,
        topic: "Project 4 - Social Media App",
        content: [
          { name: "User Profiles", duration: 6 },
          { name: "Real-time Chat", duration: 7 }
        ]
      },
      {
        week: 5,
        topic: "Project 5 - Task Management Tool",
        content: [
          { name: "Task Creation & Assignment", duration: 5 },
          { name: "Notifications & Reminders", duration: 6 }
        ]
      },
      {
        week: 6,
        topic: "Project 6 - Online Learning Platform",
        content: [
          { name: "Course Creation", duration: 6 },
          { name: "Student Progress Tracking", duration: 7 }
        ]
      }
    ],
    price: "$149",
    ratings: 4.8,
    reviews: [
      { user: "Ethan", comment: "Hands-on and very detailed!", rating: 5 },
      { user: "Sophia", comment: "Perfect for fullstack developers.", rating: 4.9 }
    ],
    resources: [
      {
        type: "Course Material",
        name: "MERN Guidebook",
        img: '',
        link: "example.com/mern-guidebook.pdf"
      }
    ],
    quizzes: [{ title: "MERN Stack Fundamentals", link: "example.com/mern-quiz" }],
    certification: false,
    enrolled: false
  }
];

