import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

function Experience() {
  return (
    <div id="Experience" className="pb-4 lg:pb-10 px-4">
      <div className="flex justify-center">
        <h1 className="my-12 sm:my-20 text-center bg-gradient-to-r from-pink-300 via-cyan-300 to-purple-500 bg-clip-text text-3xl sm:text-4xl md:text-5xl tracking-tight p-2 text-transparent max-w-3xl">
          Experience
        </h1>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pink-300/40 via-cyan-300/40 to-purple-500/40 sm:-translate-x-1/2" />

        <div className="flex flex-col gap-10 sm:gap-14">
          {EXPERIENCES.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8
                            ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <span className="absolute left-4 sm:left-1/2 top-1.5 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-purple-500 shadow-[0_0_8px_2px_rgba(103,232,249,0.5)]" />

                {/* Spacer for symmetry on desktop */}
                <div className="hidden sm:block sm:w-1/2" />

                {/* Card */}
                <div className="w-full sm:w-1/2 pl-10 sm:pl-0 sm:px-6">
                  <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 backdrop-blur-sm p-5 sm:p-6 hover:border-neutral-600 transition-colors">
                    <span className="inline-block text-xs sm:text-sm font-medium text-cyan-300 tracking-wide mb-2">
                      {exp.year}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
                      {exp.role}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-300 mt-0.5">
                      {exp.company}
                      {exp.location && (
                        <span className="text-neutral-500"> · {exp.location}</span>
                      )}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-400 font-light mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                    {exp.technologies?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] sm:text-xs rounded-full border border-neutral-700 bg-neutral-900/70 px-2.5 py-1 text-neutral-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;