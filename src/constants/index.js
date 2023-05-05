import {
    backend,
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
    eridian,
    magicdarts,
    ucberkeley,
    c1,
    supersimilar,
    azdarts,
    chromenotes,
    threejs,
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
      points: ["Managed a team of developers in creating a 2D side-scroller game for kids, achieving successful launch on Google Play.",
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
      points: ["Migrated e-commerce website from Miva to Shopify, learning Shopify's Liquid programming language to ensure seamless transition.",
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
      points: ["Facilitated a 24-week full stack web development Boot Camp using JavaScript, SQL, MongoDB, leading students to acquire industry-ready skills.",
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
      points: ["Designed and implemented an API server leveraging Trello for automated calls and emails to sites 2 weeks and 2 days ahead of job date, reducing cold call hours from 80 to 5 hours per week.",
        "Designed custom google sheets script to automatically sync cards with rows in their google sheet, saving hundreds of manhours per contract.",
        "Developed Google Sheets functions to automatically build schedules for 40 technicians, saving 10 hours of manual work per week."
    ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Super Similar",
      description:
        "Super similar was designed to be your go to source for finding something to watch based on the things you know you already enjoy. For the people who dont even know what they enjoy we also built in a feature that gives you a ideas automatically... you just have to trust it.",
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
    },
    {
      name: "A-ZDarts.com",
      description:
        "Ecommerce website hosted on shopify.  Designed and built by myself",
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
      source_code_link: "https://a-zdarts.com/",
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
  ];
  
  export { services, technologies, experiences, testimonials, projects };