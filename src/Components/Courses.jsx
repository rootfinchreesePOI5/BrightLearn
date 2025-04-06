import React from 'react'
import { courses } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Courses() {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col gap-[5rem]'>
            <div className='flex flex-col gap-2 text-center items-center justify-center w-full'>
                <h1 className='text-2xl'>Learn from the best</h1>
                <p className='text-sm text-zinc-500'>
                    Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.
                </p>
            </div>
            {/* courses div */}
            <div className='flex flex-col gap-12 items-center'>
                <div className='grid md:grid-cols-4 gap-6  items-center'>
                {
                    courses.slice(0, 4).map((item, index) => {
                        return <div className='border border-zinc-300 rounded-sm flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all duration-300' onClick={() => { navigate(`/Courses/${item.name}`), scrollTo(0, 0) }} key={index}>
                            <img className='rounded-sm max-h-[22vh]' src={item.img} alt="" />
                            <div className='!p-2 flex flex-col gap-1'>
                                <p className='font-medium'>{item.name}</p>
                                <p className='text-sm text-zinc-500'>{item.ratings}⭐⭐⭐⭐⭐ {`(${item.ratings})`}</p>
                                <p className=''>{item.price}</p>
                            </div>
                        </div>
                    })
                }
                </div>
                <button onClick={() => navigate('/Courses')} className='rounded border border-zinc-400 w-[180px] md:w-[20%] cursor-pointer active:scale-95 duration-300 transition-all h-[5vh]'>Show all courses</button>
            </div>
        </div>
    )
}

export default Courses
