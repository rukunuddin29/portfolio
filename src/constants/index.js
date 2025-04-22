import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import Airbnb from '../assets/Airbnb.png'
import ecomm from '../assets/ecomm.png'

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
      title: "Airbnb Clone",
      image: Airbnb,  // Add your image path here
      description:
        "A full-stack clone of Airbnb with functionalities like property listings, bookings, user authentication, and responsive UI.",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      github: "https://github.com/rukunuddin29/Airbnb",
      demo: "https://airbnb-eight-pi-23.vercel.app",
    },
    {
      title: "E-commerce Website",
      image: ecomm,  // Add your image path here
      description:
        "An e-commerce platform featuring product listings, a shopping cart, checkout system, and user authentication.",
      technologies: ["React", "Redux", "Express", "MongoDB"],
      github: "https://github.com/rukunuddin29/ecommerce",
      demo: "https://ecommerce-sandy-theta.vercel.app/",
    }

  
 
  
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
