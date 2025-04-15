import React from 'react'
import { cloud } from '../assets/images'

function Footer() {
    return (
        <div className='bg-zinc-200 !p-3 flex flex-col gap-5 items-center'>
            <div className='grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] items-center !p-5 md:customgrid w-[90%]'>
                <div className='md:flex flex-col hidden gap-2'>
                    <h1 className='flex items-center gap-3 text-sm font-medium'><img src={cloud} alt="" />BrightLearn </h1>
                </div>
                <div className='flex flex-col gap-3 items-center w-full text-sm text-center'>
                    <h1>Subscribe to our newsletter</h1>
                    <p className='text-xs text-gray-500'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className='flex items-center gap-3'>
                        <input className='bg-white rounded md:w-[250px] text-sm h-[5vh] !p-2' type="email" placeholder='Email' />
                        <button className='bg-pink-500 text-white w-[90px] text-xs md:w-[120px] md:text-sm h-[5vh] rounded'>Subscribe</button>
                    </div>
                </div>
                <ul className='flex  gap-3 justify-center text-xs text-gray-800 items-center w-full'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <p className='!p-3 border-t-2 text-xs text-gray-600 border-gray-500'>Copyright 2024 © BrightLearn. All Right Reserved.</p>
        </div>
    )
}

export default Footer
