import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiMongodb,
  SiPython,
  // SiFlask,
  SiFastapi,
  // SiPytorch,
  SiOpenai,
  // SiLangchain,
  SiPostgresql,
  SiDocker,
  // SiOpencv,
} from "react-icons/si";
import { IoLogoNodejs, IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";

const techList = [
  { Icon: RiReactjsLine, color: "text-cyan-400", glow: "group-hover:shadow-cyan-500/30", name: "React" },
  { Icon: IoLogoJavascript, color: "text-yellow-400", glow: "group-hover:shadow-yellow-500/30", name: "JavaScript" },
  { Icon: RiTailwindCssFill, color: "text-teal-400", glow: "group-hover:shadow-teal-500/30", name: "Tailwind CSS" },
  { Icon: IoLogoNodejs, color: "text-green-500", glow: "group-hover:shadow-green-500/30", name: "Node.js" },
  { Icon: SiPython, color: "text-yellow-300", glow: "group-hover:shadow-yellow-400/30", name: "Python" },
  { Icon: SiFastapi, color: "text-emerald-400", glow: "group-hover:shadow-emerald-500/30", name: "FastAPI" },
  // { Icon: SiFlask, color: "text-neutral-200", glow: "group-hover:shadow-neutral-400/30", name: "Flask" },
  { Icon: SiOpenai, color: "text-emerald-300", glow: "group-hover:shadow-emerald-400/30", name: "OpenAI" },
  // { Icon: SiLangchain, color: "text-green-400", glow: "group-hover:shadow-green-400/30", name: "LangChain" },
  // { Icon: SiPytorch, color: "text-orange-500", glow: "group-hover:shadow-orange-500/30", name: "PyTorch" },
  // { Icon: SiOpencv, color: "text-blue-400", glow: "group-hover:shadow-blue-500/30", name: "OpenCV" },
  { Icon: SiMongodb, color: "text-green-500", glow: "group-hover:shadow-green-500/30", name: "MongoDB" },
  { Icon: SiPostgresql, color: "text-blue-500", glow: "group-hover:shadow-blue-500/30", name: "PostgreSQL" },
  { Icon: SiDocker, color: "text-sky-400", glow: "group-hover:shadow-sky-500/30", name: "Docker" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.85 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function Tech() {
  return (
    <div className="pb-4 lg:pb-10 px-4 sm:px-6">
      <div className="flex justify-center">
        <h1 className="my-12 sm:my-20 text-center bg-gradient-to-r from-pink-300 via-cyan-300 to-purple-500 bg-clip-text text-3xl sm:text-4xl md:text-5xl tracking-tight p-2 text-transparent max-w-3xl">
          Technologies
        </h1>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4 md:gap-5"
      >
        {techList.map(({ Icon, color, glow, name }, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative"
          >
            {/* Gradient border glow on hover */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-pink-400 via-cyan-400 to-purple-500 opacity-0 group-hover:opacity-60 blur-sm transition-opacity duration-300" />

            <div
              className={`relative flex flex-col items-center justify-center gap-2 sm:gap-3
                         rounded-2xl border border-neutral-800 bg-neutral-950
                         aspect-square p-3 sm:p-4
                         shadow-lg ${glow} transition-shadow duration-300`}
            >
              <Icon className={`text-5xl sm:text-6xl md:text-7xl ${color} transition-transform duration-300 group-hover:scale-110`} />
              <span className="text-[10px] sm:text-xs md:text-sm text-neutral-300 font-medium text-center leading-tight">
                {name}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Tech;