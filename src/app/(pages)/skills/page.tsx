import React from 'react'
import { FaBootstrap, FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

const SKILLS = [
    {
        id: 1,
        icon: <FaHtml5 className='text-6xl text-white' />,
    },
    {
        id: 2,
        icon: <FaCss3 className='text-6xl text-white' />,
    },
    {
        id: 3,
        icon: <IoLogoJavascript className='text-6xl text-white' />,
    },
    {
        id: 4,
        icon: <FaReact className='text-6xl text-white' />,
    },
    {
        id: 5,
        icon: <SiTypescript className='text-6xl text-white' />,
    },
    {
        id: 6,
        icon: <SiTailwindcss className='text-6xl text-white' />,
    },
    {
        id: 7,
        icon: <FaBootstrap className='text-6xl text-white' />,
    },
]

export default function page() {
    return (
        <div className='text-white md:h-custom-screen max-w-screen-xl mx-auto px-5 py-5 flex flex-col'>
            <h2 className='font-jost text-center font-semibold text-4xl md:py-10 py-5 text-baseColor'>About Me</h2>
            <div className='flex items-center justify-center gap-5 flex-wrap h-full'>
                {
                    SKILLS.map((i) => {
                        return (
                            <div key={i.id} className='w-32 h-32 flex items-center justify-center border-2 border-secondary rounded-md p-4'>
                                {i.icon}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
