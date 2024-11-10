import React from 'react';
import { PROCESS_STEPS } from "../constants";
import { motion } from "framer-motion";

const Process = ({ fullPage }) => {
  return (
    <div
      className={`${
        fullPage ? 'min-h-screen' : ''
      } border-b border-neutral-900 pb-12 pt-12 flex flex-col`}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-4xl font-semibold mb-12 text-white"
      >
        Our Process
      </motion.h2>

      <div className="grid gap-12 px-4 sm:px-8 lg:px-16 md:grid-cols-2 lg:grid-cols-3">
        {PROCESS_STEPS.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-opacity-20 bg-black rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">{index + 1}. {step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Process;
