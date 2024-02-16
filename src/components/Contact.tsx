import React from 'react'

export default function Contact() {
    return (
        <>
            <div className='max-w-screen-xl mx-auto text-white py-5 px-5'>
                <h2 className='font-jost text-center font-semibold text-4xl my-10 py-2 text-baseColor relative heading w-fit mx-auto'>Contact Me</h2>
                <div className='flex gap-5 justify-between max-md:flex-col'>
                    <div>
                        <h4 className='text-2xl'>Contact info</h4>
                        <div className='flex flex-col gap-5 mt-5'>
                            <div className='flex flex-col gap-1'>
                                <span className='text-baseColor font-semibold'>Name</span>
                                <span className=''>Mohan Singh</span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-baseColor font-semibold'>Contact No.</span>
                                <span>+91-9720125830</span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-baseColor font-semibold'>Email</span>
                                <span>workformohan17@gmail.com</span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-baseColor font-semibold'>Address</span>
                                <span>Hathras, UP 204216</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-2xl'> Message me</h4>
                    </div>
                </div>
            </div>
            <div className='bg-secondary text-white py-2.5 text-center'>Design By Mohan Singh | Copyright © {new Date().getFullYear()}</div>
        </>
    )
}
