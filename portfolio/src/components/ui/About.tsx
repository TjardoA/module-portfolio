"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutData } from "@/data/index";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-gray-950 text-white w-full"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">{aboutData.heading}</h2>
          {aboutData.paragraphs.map((para, idx) => (
            <p
              key={idx}
              className="text-lg text-gray-300 leading-7 mb-4 last:mb-0"
            >
              {para}
            </p>
          ))}
        </motion.div>

        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-4 border-gray-800 shadow-xl">
            <Image
              src={aboutData.image.src}
              alt={aboutData.image.alt}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
