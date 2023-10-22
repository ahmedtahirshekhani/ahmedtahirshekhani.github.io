import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  logo2,
  tripguide,
  threejs,
  logo,
  webhost,
  bitgift,
  shopifyplugins,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Science & MLOps Engineer (full time)",
    company_name: "Careem (Uber Inc.)",
    icon: tesla,
    iconBg: "#383E56",
    date: "May 2023 – Current",
    points: [
      "Developed a pseudonymisation script ensuring data privacy before sharing with other parties, completed within 7 days, using Clean Code design principles.",
      "Participated in collaborative academic projects, conducting dataset analysis & evaluating Machine Learning models for supply/demand prediction, CLTV calculation & fraud detection, while prioritizing rapid script development and thorough documentation to facilitate comparisons with current production models.",
    ],
  },
  {
    title: "Lab/Software Developer (Part Time)",
    company_name: "Al Nafi",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sept 2022 – Apr 2023",
    points: [
      "Developed hands-on applications using AWS tools (Transcribe, Polly, Code Pipeline, Fraud Detector and Face Detector) and DApps (Ganache and Truffle) in 2 days each.",
      "Customizing an open source CRM based on React and Django to increase sales team productivity by 80%.",
      "Led a team of 7+ members to set up and customize LMS and CMS using the OpenEdx platform",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "10 Pearls",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Designed a web-based travel itinerary application using Angular 13, Express and Mongo, following MVC design pattern and industry best practices. Utilized domain-driven and test-driven approach, achieving 90% test coverage with Jest for unit testing.",
      "Developed a component for a top US-based security company portal in 2 days, using Agile method and i18n translation for the report display component. Explained the codebase to colleagues for better understanding",
    ],
  },
  {
    title: "Web Developer & UI/UX Intern",
    company_name: "Enzyme Digital",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2021 - Aug 2021",
    points: [
      "Designed SEO-friendly and responsive E-commerce and corporate webapplication in 12 weeks. Analyzed client's requirements and used agency's pre-build sections to aim for 90%+ performance with quick delivery.",
      "Improved 100% web traffic accuracy while integrating Facebook Pixel and Google tag, and reduced employee time developing a React-based application to automate a 4-hour daily task, cutting time in half",
      "Developed a report display component with i18n for a top US-based security company portal in two days. Explained the code design to colleagues so they can start.",
    ],
    },
];

const team = [
  {
    name: "Ahmed Tahir Shekhani ",
    status: "The Full Stack Maestro",
    team:"  Armed with 3.5 years of experience, Ahmed Tahir Shekhani, a Software Engineer, crafts digital solutions with finesse, bridging the gap between front-end and back-end effortlessly.",
  },
  {
    team:" With a staggering 9 years of experience in Flutter and Android/iOS development, Saeed leads a dynamic team of Software Engineers specializing in mobile app development. He doesn't just build apps; he crafts seamless experiences.",
    name:"Saeed",
    status:"The Mobile Maven",
   
  },
  {
    team:" As our senior SAP resource, Faizan Lodhi brings a wealth of expertise with 4+ years of experience in SAP ABAP development and deep knowledge of SAP 4 HANA. His prowess in SAP solutions is unmatched, making him a key asset for any enterprise's SAP needs",
    name: " Faizan Lodhi",
    status:"The SAP Sage",
  },
  // {
  //   team:" Moiz boasts 5 years of web development expertise in PHP and Javascript. His code weaves magic, turning web projects into captivating digital experiences.",
  //   name: " Moiz",
  //   status:"The Web Wizard",
  // },
  // {
  //   team:"With 8 years of web development under his belt, Ahmed is a Software Engineer force to be reckoned with in PHP and Javascript. He transforms ideas into functional and visually stunning websites.",
  //   name: "Ahmed Raza",
  //   status:"The Code Craftsman",
  // },
  // {
  //   team:" Aamir's 6 years of web development experience are a testament to his commitment to perfection. His websites are not just functional; they are works of art.",
  //   name: " Aamir",
  //   status:"The Web Artisan",
  // },
  // {
  //   team:"With 1 to 1.5 years of experience, Affan is not just a Software Engineer but also a Project Manager who ensures every project is a resounding success.",
  //   name: " Affan Mirza",
  //   status:"The Software Visionary",
  // },
  // {
  //   team:"With over a year of experience, Hamza, a Software Engineer, is on a rapid trajectory towards becoming a formidable force in the world of IT.",
  //   name: " Hamza",
  //   status:"The Emerging Dynamo",
  // },
  // {
  //   team:"With 1 year of experience, Sarim's coding skills, as a Software Engineer, are finely honed, delivering robust software solutions.",
  //   name: "Sarim",
  //   status:"The Code Virtuoso",
  // },
  // {
  //   team:" Kabir, as a Software Engineer, brings flair and finesse to every software project he touches with 1 year of experience.",
  //   name: "Kabir",
  //   status:"The Code Enthusiast",
  // },
  // {
  //   team:"Aashish, also with 1 year of experience as a Software Engineer, brings an artistic touch to software development, creating visually stunning applications.",
  //   name: "Aashish",
  //   status:"The Digital Craftsman",
  // },
  // {
  //   team:"Our freshest talent, Yousaf, may have zero years of experience as a Software Engineer, but his passion and dedication are boundless, making him a promising addition to our team.",
  //   name: "Yousuf",
  //   status:"The Aspiring Innovator",
  // },
];

const projects = [
  {
    name: "DataCollege - Empowering Students (MERN)    ",
    description:
      "DataCollege empowers students by allowing them to upload transcripts and access teacher ratings and grade distributions. Using MERN, we've transformed the educational journey into a data-driven adventure.",
      tags: [

      ],
    image: webhost,
    source_code_link: "https://github.com/ahmedtahirshekhani/",
  },
  {
    name: "BitGift - Simplifying Crypto Trading (MERN)",
    description:
      " Bid Gift is a blockchain-based marketplace that simplifies cryptocurrency trading. With the power of MERN, we've made buying and selling digital assets a breeze, ushering in a new era of crypto accessibility.",
      tags: [

      ],
    image: bitgift,
    source_code_link: "http://thebitgiftcard.com",
  },
  {
    name: "Shopify - OneTag: AI-Powered Sales (Shopify Plugins)",
    description:
      " In collaboration with Shopify, we've unleashed OneTag, an AI-powered sales enhancer. Through Shopify plugins, we've automated product descriptions, enhancing the shopping experience and skyrocketing sales.",
      tags: [

      ],
    image: shopifyplugins,
    source_code_link: "https://apps.shopify.com/onetag-ai",
  },
  {
    name: "ML-Language Detector",
    description:
      "Detect languages (English, Urdu, Punjabi, and mixed) from the voices of multiple people. Multiple models of ML including kNN Classifier, Logistic Regression, Decision Trees, Random Forests with ensemble method, neural networks, and SVMs are used.",
    tags: [
      {
        name: "Python Scikit-Learn",
        color: "blue-text-gradient",
      },
      {
        name: "Python Script",
        color: "green-text-gradient",
      },
      {
        name: "NumPy",
        color: "pink-text-gradient",
      },
      {
        name:"Machine Learning Model",
        color:"blue-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ahmedtahirshekhani/Machine-Learning-Project---Language-Detection",
  },
  {
    name: "UWaterloo - Folder Management DnD",
    description:
      "Developed Folder Management System with CRUD Features, with Drag and Drop.",
    tags: [
      {
        name: "PHP Script",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "App Development",
        color: "green-text-gradient",
      },
      {
        name: "Custom PHP",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Responsive Design",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://esg-reporting.uwaterloo.ca/library/",
  },
  {
    name: "Fikta - Customized ERP",
    description:
      "Fikta - A React-based project similar to an ERP system for maintaining order, return, replacement, delivery, and payment records. Create new products and start publishing their orders to keep records.",
    tags: [
      {
        name: "Enterprise Resource Planning",
        color: "blue-text-gradient",
      },
      {
        name: "ERP Software",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Problem Solving",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Web Development",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ahmedtahirshekhani/fikta-erps",
  },
  {
    name: "Mint It — Blockchain",
    description:
      "A group-based project where we developed a web application to connect NFT in the supply chain. In this users can easily fetch the details of the NFT asset and register the NFT on the Stacks blockchain which provides smart contract layering over the Bitcoin blockchain.",
    tags: [
      {
        name: "Blockchain Architecture",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Responsive Design",
        color: "pink-text-gradient",
      },
      {
        name: "API Integration",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
    ],
    image: logo2,
    source_code_link: "https://github.com/ahmedtahirshekhani/",
  },
];

export { services, technologies, experiences, team, projects };
