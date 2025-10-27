"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaFileDownload,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const SOCIAL_ICONS = [
  {
    id: 1,
    Icon: FaGithub,
    link: "https://github.com/mohansingh17",
    label: "GitHub Profile",
  },
  {
    id: 2,
    Icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/workformohan/",
    label: "LinkedIn Profile",
  },
  {
    id: 3,
    Icon: BiLogoGmail,
    link: "mailto:workformohan17@gmail.com",
    label: "Send Email",
  },
  {
    id: 4,
    Icon: FaTwitter,
    link: "https://x.com/mohan_1414",
    label: "Twitter Profile",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const HeroBanner = () => {
  return (
    <div
      className="text-white md:h-custom-screen flex items-center justify-center max-md:flex-col"
      style={{
        backgroundImage: "url('/images/banner.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <motion.div
        className="container flex flex-col gap-5 justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Social Icons */}
        <motion.div
          className="flex items-center gap-4"
          variants={containerVariants}
        >
          {SOCIAL_ICONS.map(({ id, Icon, link, label }) => (
            <motion.a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotate: 10,
                backgroundColor: "var(--secondary)",
                transition: { duration: 0.3 },
              }}
              className="bg-light w-10 h-10 flex items-center justify-center rounded-full cursor-pointer group transition-all"
            >
              <Icon className="text-secondary group-hover:text-white transition-all text-xl" />
            </motion.a>
          ))}
        </motion.div>

        {/* Greetings */}
        <motion.h5
          className="md:text-3xl text-2xl font-semibold"
          variants={itemVariants}
        >
          Hi There!
        </motion.h5>

        <motion.h3
          className="md:text-5xl text-3xl font-semibold"
          variants={itemVariants}
        >
          I'm <span className="text-baseColor">Mohan Singh</span>
        </motion.h3>

        {/* Type Animation */}
        <motion.div
          className="flex items-center gap-2.5 h-24"
          variants={itemVariants}
        >
          <TypeAnimation
            preRenderFirstString
            sequence={[
              "Front End Developer",
              1000,
              "React Js Developer",
              1000,
              "Next Js Developer",
              1000,
              "Continuous Learning",
              1000,
            ]}
            speed={50}
            className="md:text-4xl text-2xl text-baseColor z-10 font-semibold border-2 border-baseColor pt-3 pb-5 px-5 rounded-md"
            repeat={Infinity}
          />
        </motion.div>

        {/* Download Resume Button */}
        <motion.div className="mt-5" variants={itemVariants}>
          <a
            href="https://drive.google.com/file/d/1J3M26fPMCt9tJgROHNoaLKIje6z3fBQ1/view?usp=sharing"
            target="_blank"
            className="inline-flex items-center gap-2 bg-baseColor text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-baseColor border-2 border-baseColor transition-all"
          >
            <FaFileDownload className="text-lg" />
            Resume
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroBanner;
