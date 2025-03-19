// import ModeToggle from "@/components/ModeToggle";
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
  next,
  react,
  tail,
  vercel,
  portfolio,
  html,
  js,
  reactC,
  nextjs,
  mern,
  ToggleCode,
  pen,
  themeicon,
  logout,
  security,
  bookmark,
  bell
} from "./images";
// import MyButton from "@/components/MyButton";
// import Card from "@/components/Card";

export const sidelinks = [
  {link: 'Edit profile' , img: pen},
  {link: 'Themes' , img:themeicon},
  {link: 'Notifications' , img:bell},
  {link: 'Security' , img:security},
  {link: 'Saved' , img:bookmark},
]
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

export const frontend = [
  {
    name: "React js",
    des: "A JavaScript library for building user interfaces, commonly used for creating single-page applications (SPA).",
  },
  {
    name: "Next js",
    des: "A React framework that enables server-side rendering, static site generation, and routing, making it ideal for fast and SEO-friendly applications.",
  },
];

export const backend = [
  {
    name: "Node js",
    des: "A JavaScript runtime environment that allows you to build scalable, high-performance server-side applications using JavaScript.",
  },
  {
    name: "Express js",
    des: "A lightweight Node.js web application framework for building APIs and web servers with minimal setup and high flexibility.",
  },
  {
    name: "MongoDB",
    des: "A NoSQL database that stores data in JSON-like documents, known for its scalability and flexibility in handling unstructured data.",
  },
];

export const styles = [
  {
    name: "CSS",
    des: "A style sheet language used to describe the presentation of a document written in HTML or XML, enabling layout and visual design of web pages.",
  },
  {
    name: "Tailwind",
    des: "A utility-first CSS framework for rapidly building custom designs without writing custom CSS, offering a highly customizable configuration.",
  },
  {
    name: "Sass",
    des: "A CSS preprocessor that adds features like variables, nested rules, and mixins, making it easier to write and maintain complex styles.",
  },
];

export const MyProjects = [
  {
    name: "feelHealthy",
    tools: ["React js", "Tailwind Css", "Mongodb", "Node Js", "Express js"],
    des: "It is a doctors appointment panel which helps you to Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.",
    repo: "https://github.com/rootfinchreesePOI5/feelHealthy",
    mainImg: feelHealthy,
    link: 'https://healthyfeeling.netlify.app/',
    category: ['React js', 'FullStack']
  },
  {
    name: "Under-Armour",
    tools: ["React js", "Tailwind Css", "Mongodb", "Node Js", "Express js"],
    des: "An e-commerce clone website of Under Armour that provides A wide range of products to meet the needs of athletes not only during training but also in everyday life.",
    repo: "https://github.com/rootfinchreesePOI5/Under-Armour",
    mainImg: ua,
    link: 'https://ua-us.netlify.app/',
    category: ['React js', 'FullStack']
  },
  {
    name: "Unicron",
    tools: ["React js", "Css", "Mongodb", "Node Js", "Express js"],
    des: "A blogging Website that believes that every story we tell is a reflection of our team and helps you share your ideas to the world",
    repo: "https://github.com/rootfinchreesePOI5/Unicron",
    mainImg: unicron,
    link: 'https://modernmoon.netlify.app/',
    category: ['React js', 'FullStack']
  },
  {
    name: "Portfolio",
    tools: ["React js", "Css", "Mongodb", "Node Js", "Express js"],
    des: "A blogging Website that believes that every story we tell is a reflection of our team and helps you share your ideas to the world",
    repo: "https://infinitedevportfolio.vercel.app/",
    mainImg: portfolio,
    link: 'https://modernmoon.netlify.app/',
    category: ['Next js']
  },
];

export const testimonials = [
  {
    img: client1, // Replace with actual image URL
    experience: 'Working with Abdiaziz was an absolute pleasure! He delivered the project on time and exceeded our expectations.',
    name: "John Doe, CEO of TechSolutions",
  },
  {
    img: client2, // Replace with actual image URL
    experience: 'Abdiaziz has a great eye for detail and is highly skilled in frontend development. Highly recommend!',
    name: "Jane Smith, Project Manager at WebWorks",
  },
  {
    img: client3, // Replace with actual image URL
    experience: 'Very professional and dedicated. Abdiaziz ensured all our requirements were met and provided excellent support.',
    name: "Michael Brown, Founder of StartUp Inc.",
  },
  {
    img: client4, // Replace with actual image URL
    experience: 'Abdiaziz’s expertise in web development helped our business grow significantly. Fantastic experience!',
    name: "Emily Davis, Marketing Head at Creative Agency",
  },
  {
    img: client5, // Replace with actual image URL
    experience: 'An exceptional developer who truly cares about client satisfaction. I’m very impressed with the results.',
    name: "David Wilson, Freelancer",
  },
  {
    img: client6, // Replace with actual image URL
    experience: 'Abdiaziz is a highly skilled developer with great problem-solving abilities. A pleasure to work with!',
    name: "Sarah Johnson, UI/UX Designer at DesignPro",
  },
];


export const tools = [
  { logo: vercel, name: 'NextJs', color: 'primary' },
  { logo: tail, name: 'TailwindCSS', color: 'cyan-500' },
  { logo: react, name: 'React', color: 'cyan-600' },
  { logo: github, name: 'Acerternity UI', color: 'cyan-100' },
]


export const filterBytype = [
  'All',
  'React js',
  'Next js',
  'FullStack'
]


export const courses = [
  { img: html, name: "Html Css" },
  { img: js, name: "Javascript" },
  { img: reactC, name: "React js" },
  { img: nextjs, name: "Next js" },
  { img: mern, name: "FullStack" },
]

export const components = [
  "Toggle",
  "Button",
  "Card",
  "Modal",
  "Accordion",
  "Dropdown",
  "Tooltip",
  "Slider",
  "Avatar",
  "ProgressBar"
];


// export const MyComponents = [
//   { name: 'Toggle', 
//   component: <ModeToggle />,
//   img: ToggleCode
//  },
//  {
//   name:'Button',
//   component: <MyButton/>,
//   img:''
//  },
//  {
//   name:'Card',
//   component: <Card/>,
//   img:''
//  },
//  {
//   name:'Modal',
//   component: <MyButton/>,
//   img:''
//  },
//  {
//   name:'DropDown',
//   component: <MyButton/>,
//   img:''
//  },
//  {
//   name:'Avatar',
//   component: <MyButton/>,
//   img:''
//  },

// ]


