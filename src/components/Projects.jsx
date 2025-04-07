import { PROJECTS } from "../constants";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

function Projects() {
  return (
    <>
      <div className="pb-4 mx-8 lg:mx-0">
        <div className="flex justify-center">
          <h1 className="my-20 text-center bg-gradient-to-r from-pink-300 via-cyan-300 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent max-w-3xl">
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
                  className="mb-6 rounded Pimg lg:w-80 lg:h-44"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full ml-10 max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full px-3 py-1 text-sm font-medium text-purple-300 bg-gradient-to-br from-zinc-900 via-neutral-800 to-zinc-900 shadow-inner backdrop-blur-md border border-zinc-700 transition duration-300 hover:scale-105 hover:text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4 flex-wrap">
                  {/* GitHub Button */}
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl"
                    >
                      <FaGithub className="text-lg" />
                      GitHub
                    </a>
                  </button>

                  {/* Get Demo Button */}
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_180deg_at_50%_50%,#A0F1EA_0%,#3B82F6_50%,#A0F1EA_100%)]" />
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-1 text-sm font-medium text-cyan-300 backdrop-blur-3xl"
                    >
                      Get Demo
                      <FaArrowRight className="text-sm" />
                    </a>
                  </button>
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
