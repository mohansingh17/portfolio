"use client"

import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function page() {
    return (
        <div className='text-white screen-height max-w-screen-xl mx-auto px-5'>
            <h2 className='font-jost text-center font-semibold text-4xl py-10'>About Me</h2>
            <div className='flex max-md:flex-col items-center gap-10 justify-between w-full'>
                <div className='flex-1'>
                    <div className='flex items-center gap-2.5 h-24 font-jost'>
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
                            className='md:text-3xl text-3xl text-baseColor z-10 font-semibold rounded-md inline-block'
                            repeat={Infinity}
                        />
                    </div>
                    <p>I am proficient in designing & developing complete websites, Landing page websites, E-commerce websites, Template websites, Blog Page websites with fully responsive using Media Queries & Bootstrap 5 for user interfaces.</p>
                </div>
                <div className='flex-1 flex justify-end'>
                    <div>
                        <Image src="/images/mohan2.jpg" className='rounded-full w-[28rem] aspect-square object-cover' alt='my-pic' width={200} height={200} />
                    </div>
                </div>
            </div>
        </div>
    )
}
