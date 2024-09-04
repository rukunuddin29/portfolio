import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconVariation = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Tech() {
  return (
    <div className="pb-4 lg:pb-10">
      <div className="flex justify-center">
        <h1 className="my-20 text-center bg-gradient-to-r from-pink-300 via-cyan-300 to-purple-500 bg-clip-text text-5xl tracking-tight  p-2 text-transparent max-w-3xl me">
          Technologies
        </h1>
      </div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariation(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariation(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariation(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoNodejs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariation(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariation(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-teal-400" />
        </motion.div>
        <motion.div
          variants={iconVariation(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJava className="text-7xl text-red-600" />
        </motion.div>
        <motion.div
          variants={iconVariation(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaBootstrap className="text-7xl text-purple-600" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Tech;
