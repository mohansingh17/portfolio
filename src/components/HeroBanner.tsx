"use client";

import React from "react";
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
    icon: <FaGithub />,
    link: "https://github.com/mohansingh17",
    label: "GitHub Profile",
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/workformohan/",
    label: "LinkedIn Profile",
  },
  {
    id: 3,
    icon: <BiLogoGmail />,
    link: "mailto:workformohan17@gmail.com",
    label: "Send Email",
  },
  {
    id: 4,
    icon: <FaTwitter />,
    link: "https://x.com/mohan_1414",
    label: "Twitter Profile",
  },
];

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
      <div className="container flex flex-col gap-5 justify-center">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {SOCIAL_ICONS.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="bg-[#FEFBF6] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-secondary group transition-all"
            >
              {React.cloneElement(item.icon, {
                className:
                  "text-secondary group-hover:text-white transition-all text-xl",
              })}
            </a>
          ))}
        </div>

        {/* Greetings */}
        <h5 className="md:text-3xl text-2xl font-semibold">Hi There!</h5>
        <h3 className="md:text-5xl text-3xl font-semibold">
          I'm <span className="text-baseColor">Mohan Singh</span>
        </h3>

        {/* Type Animation */}
        <div className="flex items-center gap-2.5 h-24">
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
        </div>

        {/* Download Resume Button */}
        <div className="mt-5">
          <a
            href="https://drive.google.com/file/d/1J3M26fPMCt9tJgROHNoaLKIje6z3fBQ1/view?usp=sharing" // Update with your resume path
            target="_blank"
            className="inline-flex items-center gap-2 bg-baseColor text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-baseColor border-2 border-baseColor transition-all"
          >
            <FaFileDownload className="text-lg" />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
