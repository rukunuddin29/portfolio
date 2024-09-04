import React from "react";
import { ABOUT_TEXT } from "../constants";
import hum from "../assets/hum.png";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="pb-4 py-32 mx-4 lg:mx-20">
      <h1 className="my-1 text-center text-4xl">
        About{" "}
        <span className="bg-gradient-to-r from-pink-300 via-cyan-300 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent me">
          Me
        </span>
      </h1>
      <div className="flex flex-wrap lg:mx-40">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              src={hum}
              alt="Profile"
              className="rounded-2xl w-72 lg:w-auto bg-neutral-900 bg-opacity-60"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <p className="flex justify-center lg:justify-start my-10 px-4 text-l lg:px-20">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
