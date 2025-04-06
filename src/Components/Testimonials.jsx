import React, { useState } from 'react'
import { testimonials } from '../assets/assets'

function Testimonials() {
    const [Testimonial , setTestimonial] = useState(testimonials.slice(0 , 3));
    const [display , setDisplay] = useState('Next >');

    const applyChange = () =>{
        if(display === 'Next'){
            setDisplay('Back');
            setTestimonial(testimonials.slice(3, 6))
        }else{
            setDisplay('Next')
            setTestimonial(testimonials.slice(0 , 3))
        }
    }
    return (
        <div className='flex flex-col gap-[3rem] items-center'>
            <div className='flex flex-col items-center justify-center  gap-2'>
                <h1 className='text-2xl'>Testimonials</h1>
                <p className='text-sm text-gray-500'>Hear from our learners as they share their journeys of transformation, success, and how our
                    platform has made a difference in their lives.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-[4rem] md:!px-[5rem] '>
                {
                    Testimonial.map((item , index) =>{
                        return <div className='bg-black text-white transition-all duration !p-3 !px-6 rounded-md flex gap-3 items-center' key={index}>
                            <img className='w-14 rounded-full' src={item.img} alt="" />
                            <div className='flex flex-col text-sm gap-3 !p-3'>
                                <p className='flex flex-col gap-1'>{item.name} <span>{item.courseFinished}</span></p>
                                <p className='text-xs text-gray-400'>{item.experience}</p>
                            </div>
                        </div>
                    })
                }
            </div>
                <button onClick={applyChange} className='w-[150px] h-[6vh] text-sm active:scale-[0.98] duration-300 transition-all rounded border cursor-pointer border-gray-300'>{display}</button>
        </div>
    )
}

export default Testimonials
