import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const HeroBanner = () => {
    return (
        <div className='bg-black text-white h-screen relative' style={{ height: "calc(100vh - 64px)" }}>
            <Image src="/images/hero.jpg" alt='mohan' height={200} width={200} className='h-full w-auto absolute top-0 left-1/2 -translate-x-1/2' />
            <div className='flex flex-col gap-5 justify-center h-full pl-32 relative'>
                {/* <h4 className='text-3xl'>Hello, my name is</h4> */}
                <h3 className='text-6xl font-semibold'>I'm Mohan Singh</h3>
                <div className='flex items-center gap-2.5 h-24'>
                    {/* <div className='text-4xl font-semibold'>And I'm a</div> */}
                    <TypeAnimation
                        sequence={[
                            "Front End Developer",
                            1000,
                            "React Js Developer",
                            1000,
                            "Next Js Developer",
                            1000,
                        ]}
                        speed={50}
                        className='text-4xl text-[#EE9322] z-50 font-semibold border-2 border-[#EE9322] pt-3 pb-5 px-5 rounded-md'
                        repeat={Infinity}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroBanner