import {
  backend,
  web,
  gamedev,
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
  eridian,
  magicdarts,
  ucberkeley,
  c1,
  supersimilar,
  azdarts,
  chromenotes,
  threejs,
  littlefish,
  ironlotus,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: gamedev,
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
];

const experiences = [
  {
    title: "Gameplay Programmer",
    company_name: "Eridian Entertainment",
    icon: eridian,
    iconBg: "#383E56",
    date: "July 2015 to May 2018",
    points: [
      "Managed a team of developers in creating a 2D side-scroller game for kids, achieving successful launch on Google Play.",
      "Utilized Unity game engine and AI expertise to develop engaging and interactive gameplay experiences.",
      "Developed tools inside Unity to help non technical users generate content faster.",
    ],
  },
  {
    title: "Front End Web Developer",
    company_name: "Magic Darts Inc",
    icon: magicdarts,
    iconBg: "#E6DEDD",
    date: "Sept 2017 to Mar 2022",
    points: [
      "Migrated e-commerce website from Miva to Shopify, learning Shopify's Liquid programming language to ensure seamless transition.",
      "Designed and implemented a warehouse BIN system, reducing average order picking time from 1 minute to 10 seconds per item and enabling a reduction of order pickers from 8 to 2 per day.",
      "Fixed search bar bug and added predictive search features, reducing bounce rate by almost half.",
      "Overhauled website for SEO best practices and built a WordPress blog to boost SEO, resulting in a significant improvement in Google rank for key search terms, with most now achieving the number one position.",
    ],
  },
  {
    title: "Teaching Assistant | Full Stack Bootcamp",
    company_name: "UC Berkeley, Berkeley - California",
    icon: ucberkeley,
    iconBg: "#383E56",
    date: "Jan 2021 to Mar 2022",
    points: [
      "Facilitated a 24-week full stack web development Boot Camp using JavaScript, SQL, MongoDB, leading students to acquire industry-ready skills.",
      "Provided one-on-one mentoring to students, resulting in successful career transitions, including a student hired at Google.",
      "Monitored student progress and provided actionable feedback, fostering a continuous improvement mindset.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "C1 Techs",
    icon: c1,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Designed and implemented an API server leveraging Trello for automated calls and emails to sites 2 weeks and 2 days ahead of job date, reducing cold call hours from 80 to 5 hours per week.",
      "Designed custom google sheets script to automatically sync cards with rows in their google sheet, saving hundreds of manhours per contract.",
      "Developed Google Sheets functions to automatically build schedules for 40 technicians, saving 10 hours of manual work per week.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "John is one of the most dedicated and hardworking developers I've ever met. He is passionate about his work and always goes the extra mile to ensure the job is done right",
    name: "Paula Pritchett",
    designation: "CEO",
    company: "C1 Techs",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    testimonial:
      "John is an amazing teacher. He is able to explain complex concepts in a way that is easy to understand. He is also very patient and always willing to help.",
    name: "Tom Bellenger",
    designation: "Software Engineer II",
    company: "Google",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    testimonial:
      "After John optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Tori Sowders",
    designation: "CTO",
    company: "Magic Darts Inc",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
];

const projects = [
  {
    name: "Super Similar",
    description:
      "Super Similar is an innovative platform created to assist users in discovering new content based on their existing preferences. Designed as a go-to solution for personalized viewing recommendations, the platform also caters to those unsure of their tastes by offering a unique auto-suggestion feature. By simply trusting this intuitive system, users can effortlessly uncover new entertainment options tailored to their interests, ensuring a consistently enjoyable viewing experience.",
    tags: [
      {
        name: "api",
        color: "blue-text-gradient",
      },
      {
        name: "ajax",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: supersimilar,
    source_code_link: "https://github.com/jbaxter91/super-similar",
    deployed_link: "https://ssbrear.github.io/group-project/",
  },
  {
    name: "A-ZDarts.com",
    description:
      "A-ZDarts is an eCommerce website dedicated to the sale of darts and related products. Skillfully designed and built from the ground up, this Shopify-hosted platform stands as a testament to my proficiency in web development and design. By visiting A-ZDarts, potential employers can explore a user-friendly interface and seamless shopping experience, which reflect my commitment to delivering high-quality work and meeting client needs.",
    tags: [
      {
        name: "liquid",
        color: "blue-text-gradient",
      },
      {
        name: "ruby",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: azdarts,
    deployed_link: "https://a-zdarts.com/",
  },
  {
    name: "Chrome Notes",
    description:
      "Chrome Notes is a lightweight and user-friendly Chrome extension that allows you to leave notes on any specific URL for easy reference later. The extension is designed to help users keep track of important information or reminders while browsing the web, making it an indispensable tool for staying organized and productive.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "chrome",
        color: "green-text-gradient",
      },
      {
        name: "extension",
        color: "pink-text-gradient",
      },
    ],
    image: chromenotes,
    source_code_link: "https://github.com/jbaxter91/chrome-notes",
  },
  {
    name: "Little Fish GO",
    description:
      "Little Fish GO is an engaging mobile game, available on both Android and iOS platforms, where players assume the role of a fish striving to consume as many sardines as possible while avoiding being eaten by larger predators. Featuring intuitive controls reminiscent of Flappy Bird, the game offers exciting character unlocks and multiple stages to keep players entertained. Developed using Unity and Spine2D, Little Fish GO delivers an enjoyable gaming experience with captivating visuals and dynamic gameplay.",
    tags: [
      {
        name: "C sharp",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "spine2D",
        color: "pink-text-gradient",
      },
      {
        name: "android",
        color: "yellow-text-gradient",
      },
    ],
    image: littlefish,
    deployed_link: 'https://play.google.com/store/apps/details?id=com.EridianEntertainmentLLC.LittleFishGo&hl=en&pli=1',
    youtube_link: "https://www.youtube.com/watch?v=PX9Vg1Ad1fo",
  },
  {
    name: "Iron Lotus (UNRELEASED)",
    description:
      "Iron Lotus, the successor to Little Fish GO, is a 2D side-scrolling beat 'em up game, drawing inspiration from classic titles such as River City Ransom and Castle Crashers. Developed using the Unity engine, the game progressed to multiplayer testing before the unfortunate dissolution of the company. Reflecting on past projects, Iron Lotus stands out as the one endeavor that, given the opportunity, would be eagerly revisited and completed.",
    tags: [
      {
        name: "C sharp",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "multiplayer",
        color: "pink-text-gradient",
      },
    ],
    image: ironlotus,
    source_code_link: "https://github.com/jbaxter91/chrome-notes",
  },
];

export { services, technologies, experiences, testimonials, projects };
