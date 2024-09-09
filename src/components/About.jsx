import React from "react";
import { ABOUT_TEXT } from "../constants";
import hum from "../assets/hum.png";
import { motion } from "framer-motion";
import './About.css'
function About() {
  return (<>
    <div> <h1 className="lg:mt-40 text-3xl text-center">
    About{" "}
    <span className="bg-gradient-to-r from-pink-300 via-cyan-300 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent">
      Me
    </span>
  </h1></div>
    <div className=" h-auto flex flex-col mt-4 lg:flex-row lg:items-center lg:mx-28 lg:gap-7 text-center lg:text-left">
    
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="lg:w-1/2 p-4"
    >
      <div className="flex justify-center lg:justify-end">
        <img
          src={hum}
          alt="Profile"
          className="rounded-2xl w-72 lg:w-3/4 bg-neutral-900 bg-opacity-60 image"
        />
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="lg:w-1/2 lg:pr-40 p-10"
    >
     
      <p className="text-lg text-pretty sm:text-pretty aboutText">
        {ABOUT_TEXT}
      </p>
    </motion.div>
  </div>
  </>
  );
}

export default About;
