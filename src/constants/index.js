import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

export const HERO_CONTENT = `I'm a full-stack developer skilled in React, Next.js, Node.js, and MongoDB, focused on building scalable applications that drive business growth and enhance user experiences.`;

export const ABOUT_TEXT = `

I'm a passionate full-stack developer pursuing a BTech in Information Technology at Netaji Subhash Engineering College, currently in my third year. My journey in web development began with a fascination for how technology shapes our world. I'm focused on enhancing user experiences through intuitive and engaging web applications. With hands-on projects and a solid academic foundation, I design solutions that meet technical requirements while ensuring seamless user experiences. I'm always eager to take on new challenges and continuously grow in the field of web development.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
 
];

export const PROJECTS = [
  {
    title: "API integrated TECH-NEWS",
    image: project1, 
    description:
      "This system integrates with a third-party API, specifically the NewsAPI, to fetch the latest news headlines. The application is built using React. The purpose of the system is to retrieve and display news articles from the NewsAPI, allowing users to stay updated with current tech updates.",
    technologies: ["HTML", "CSS", "React", "tailwind CSS","java script"],
  },
  {
    title: "Portfolio Website",
    image: project2,  // Placeholder or alternative content
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "tailwind CSS", "Framers-motion"],
  },
  // {
  //   title: "Task Management App",
  //   image: "",  // Placeholder or alternative content
  //   description:
  //     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  //   technologies: ["HTML", "CSS", "React","Java script" ],
  // }
 
  
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
