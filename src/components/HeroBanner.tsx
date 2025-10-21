"use client";

import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const ICONS = [
  {
    id: 1,
    icon: (
      <FaGithub className="text-secondary group-hover:text-white transition-all text-xl" />
    ),
  },
  {
    id: 2,
    icon: (
      <FaLinkedinIn className="text-secondary group-hover:text-white transition-all text-xl" />
    ),
  },
  {
    id: 3,
    icon: (
      <FaTwitter className="text-secondary group-hover:text-white transition-all text-xl" />
    ),
  },
  {
    id: 4,
    icon: (
      <FaInstagram className="text-secondary group-hover:text-white transition-all text-xl" />
    ),
  },
];

const HeroBanner = () => {
  return (
    <div className="text-white relative md:h-custom-screen max-w-screen-xl mx-auto flex items-center gap-5 justify-between px-5 max-md:flex-col">
      {/* <Image src="/images/hero-banner.jpg" alt='mohan' height={200} width={200} className='h-full w-auto absolute top-0 left-1/2 -translate-x-1/2 opacity-20 hidden' /> */}

      <div className="flex flex-col gap-5 justify-center h-full max-md:py-8 max-md:w-full">
        <div className="flex items-center gap-5">
          {ICONS.map((i) => {
            return (
              <span
                key={i.id}
                className="bg-[#FEFBF6] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-secondary group transition-all"
              >
                {i.icon}
              </span>
            );
          })}
        </div>
        <h5 className="md:text-3xl text-3xl font-semibold">Hi There!</h5>
        <h3 className="md:text-5xl text-4xl font-semibold">
          I'm <span className="text-baseColor">Mohan Singh</span>{" "}
        </h3>
        <div className="flex items-center gap-2.5 h-24">
          {/* <div className='text-4xl font-semibold'>And I'm a</div> */}
          <TypeAnimation
            preRenderFirstString={true}
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
            className="md:text-4xl text-3xl text-baseColor z-10 font-semibold border-2 border-baseColor pt-3 pb-5 px-5 rounded-md"
            repeat={Infinity}
          />
        </div>
      </div>
      <div>
        <div>
          <Image
            src="/images/mohan4.jpg"
            alt=""
            priority
            className="md:w-[25rem] md:h-[25rem] object-cover w-full h-auto rounded-full"
            height={400}
            width={400}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
