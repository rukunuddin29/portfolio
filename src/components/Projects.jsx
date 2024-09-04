import { PROJECTS } from "../constants";

import { motion } from "framer-motion";

function Projects() {
  return (
    <>
      <div className="  pb-4 mx-8 lg:mx-0">
        <div className="flex justify-center">
         
          <h1 className="my-20 text-center bg-gradient-to-r from-pink-300 via-cyan-300 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent max-w-3xl me">
            Projects
          </h1>
        </div>
        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/4"
              >
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="mb-6 rounded lg:w-80 lg:h-44 "
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full  max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
