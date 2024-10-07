import React from "react";
import { motion } from "framer-motion";
import circle from "../assets/circle.png";
import square from "../assets/square.png";
import i from "../assets/i.png";
import { HERO_CONTENT } from "../constants";

function Hero() {
  const scrollToProjects = () => {
    document.getElementById("Projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative pb-5 text-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.img
          src={i}
          alt="profile picture"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-purple-500 mb-8 lg:w-48 lg:h-48"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="space-y-2">
          <motion.h1
            className="text-4xl md:text-6xl  font-thin leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I am
          </motion.h1>
          <motion.h1
            className="bg-gradient-to-r from-pink-300 via-cyan-300 to-purple-500 bg-clip-text 
            text-3xl lg:text-6xl md:text-6xl 
            tracking-tight text-transparent name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            RUKUNUDDIN AHMED
          </motion.h1>
        </div>

        <motion.div
          className=" absolute left-5 top-10 md:left-[15%] md:top-[10%]"
          drag
          dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
          whileHover={{ scale: 1.1 }}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={circle}
            alt="drag me"
            className="w-20 h-20 md:block hidden md:w-24 md:h-24 lg:w-60 lg:h-60 cursor-pointer shadow-lg"
            draggable="false"
            title="Drag me!"
          />
        </motion.div>

        <motion.div
          className="md:block absolute right-5 bottom-5 hidden  lg:right-[180px] lg:bottom-[-80px]"
          drag
          dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
          whileHover={{ scale: 1.1 }}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={square}
            alt="drag me"
            className=" md:w-24 md:h-24 lg:w-60 lg:h-60 lg:cursor-pointer shadow-lg"
            draggable="false"
            title="Drag me!"
          />
        </motion.div>

        <motion.p
          className="mx-10 w-4/5 py-2  font-light tracking-tighter z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {HERO_CONTENT}
        </motion.p>

        {/* Buttons for Resume and Projects */}
        <div className="mt-6 space-x-4">
        <motion.a
  href="/MYRESUME.pdf" // Assuming the PDF is in the public folder
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 bg-purple-500 text-white rounded-3xl shadow-md hover:bg-purple-600 transition-colors"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Resume
</motion.a>


          <motion.button
            onClick={scrollToProjects}
            className="px-6 py-2 border border-purple-500 text-white rounded-3xl shadow-md transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
