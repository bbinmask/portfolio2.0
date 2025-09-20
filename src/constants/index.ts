import { ProjectProps } from "@/types";

export const myProjects: ProjectProps[] = [
  {
    id: 1,
    title: "Taskify",
    description:
      "A Kanban board task management application with DND features.",
    subDescription: [
      "Built a scalable application with NextJS, TailwindCSS, React-Query.",
      "Implemented secure authentication using clerk and database management using Prisma.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "https://board-taskify.vercel.app/",
    logo: "https://board-taskify.vercel.app/logo.svg",
    image: "/assets/projects/taskify.png",
    tags: [
      {
        id: 1,
        name: "Tailwind",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "React",
        path: "/assets/logos/react.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Score Board System",
    description: "A cricket Score-Board web application.",
    subDescription: [
      "Integrated MongoDB for authentication, supporting Express, JWT, core authentication.",
      "Implemented undo button to back to the previous ball",
      "Developed a Next frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure MongoDB database for user data storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/score-board.png",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "HTML",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Medicare Web App",
    description:
      "A modern, interactive, hospital management web application built with MERN Core.",
    subDescription: [
      "Developed a fully interactive Hospital Management Web Application using React.",
      "Implemented API interactions using Express Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated MongoDB for efficient client-side database storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/hospital-management.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/irfanul-madar-84a70a333/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "X",
    href: "https://www.x.com/bbinmask",
    icon: "/assets/socials/x.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Development",
    desc: "Developed backend servers using NodeJS and MongoDB database.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Solid foundation in JavaScript, ReactJS and NextJS.",
    desc: "Developed solid foundation in JavaScript,ReactJS and NextJS by creating real world projects.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "NextJS and TailwindCSS",
    desc: "Developed and maintained user-facing features using modern frontend technologies like NextJS & TailwindCSS.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const journey = [
  {
    title: "Front-End Developer",
    subTitle: "Simple Web Projects",
    date: "2023-2024",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the HTML, CSS and JavaScript",
      "Designed and implemented simple web interfaces using HTML and CSS.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Back-End Developer",
    subTitle: "Basic to Advance",
    date: "2024-2025",
    contents: [
      "Built server systems for data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems using Node.js, Express and MongoDB.",
      "✅ Implemented secure APIs",
      "✅ Ensured data privacy for customers through industry-compliant protocols.",
    ],
  },
  {
    title: "Software Developer",
    subTitle: "Web Developer",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Next, TypeScript, Shadcn and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
