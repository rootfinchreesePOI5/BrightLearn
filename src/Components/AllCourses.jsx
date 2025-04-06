import React from 'react'
import { courses } from '../assets/assets'
import { useNavigate } from 'react-router-dom';

function AllCourses() {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col !pt-[5rem] md:!pt-0 gap-[2rem]'>
            <div>
                <h1 className='text-xl font-medium'>Course List</h1>
                <p className='text-sm text-pink-400 underline'>
                    <span className='cursor-pointer' onClick={() => { navigate('/'), scrollTo(0, 0) }}>Home/</span>
                    <span className='text-black'>Courses</span>
                </p>
            </div>
            <div>
                {
                    <div className='grid md:grid-cols-4 gap-6  items-center'>
                        {
                            courses.map((item, index) => {
                                return <div className='border border-zinc-300 rounded-sm flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all duration-300' onClick={() => { navigate(`/Courses/${item.name}`), scrollTo(0, 0) }} key={index}>
                                    <img className='rounded-sm max-h-[22vh]' src={item.img} alt="" />
                                    <div className='!p-2 flex flex-col gap-1'>
                                        <p className='font-medium'>{item.name}</p>
                                        <p className='text-sm text-zinc-500'>{item.ratings}⭐⭐⭐⭐⭐ {`(${item.ratings})`}</p>
                                        <p className='text-xl text-pink-500'>{item.price}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default AllCourses
