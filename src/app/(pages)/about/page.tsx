"use client";

import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function page() {
  return (
    <div className="container">
      <h2 className="heading">About Me</h2>
      <div className="flex max-md:flex-col items-center gap-10 justify-between w-full">
        <div className="flex-1">
          <div className="flex items-center gap-2.5 h-24 font-jost">
            {/* <span className='text-3xl font-semibold'>I'm Mohan and I'm a</span> */}
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                "I'm Mohan and I'm a Front End Developer",
                1000,
                "I'm Mohan and I'm a React Js Developer",
                1000,
                "I'm Mohan and I'm a Next Js Developer",
                1000,
              ]}
              wrapper="span"
              speed={40}
              className="md:text-3xl text-3xl text-baseColor z-10 font-semibold rounded-md inline-block"
              repeat={Infinity}
            />
          </div>
          <p>
            Frontend Developer with 3+ years of experience building modern,
            responsive, and high-performance web applications. Skilled in
            React.js, Next.js, TypeScript, and state management (Redux Toolkit).
            Strong expertise in UI/UX optimization, API integration,
            authentication, routing, and cross-browser responsive design.
            Experienced in mentoring junior developers and delivering scalable
            solutions that enhance performance, SEO, and user experience.
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <div>
            <Image
              src="/images/mohan4.jpg"
              priority
              className="rounded-full w-[28rem] aspect-square object-cover"
              alt="my-pic"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
