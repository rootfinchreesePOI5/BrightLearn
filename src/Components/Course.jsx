import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { courses } from '../assets/assets';
import { book, down, up } from '../assets/images';
import { AppContext } from '../Context/AppContext';
import { toast } from 'sonner';

function Course() {
    const { id: params } = useParams();
    const navigate = useNavigate();
    const [selected, setSelected] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);
    const {token} = useContext(AppContext);

    useEffect(() => {
        if (params) {
            setSelected(courses.filter(item => item.name === params));
        }
    }, [params, courses]);

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const newEnroll = (name) =>{
        if(!token){
            toast.error('Sign in to enroll');
            navigate('/Login')
        }
        else{
            navigate(`/Enroll/${name}`);
        }
    }

    return (
        <div className='flex flex-col !pt-[5rem] md:!pt-0 gap-6'>
            <div>
                <h1 className='text-xl font-medium'>Course List</h1>
                <p className='text-xs md:text-sm text-pink-400 underline flex items-center gap-1 '>
                    <span onClick={() => { navigate('/'), scrollTo(0, 0) }} className='cursor-pointer'>Home/</span>
                    <span onClick={() => { navigate('/Courses'), scrollTo(0, 0) }} className='cursor-pointer'>Courses/</span>
                    <span className='text-black'>{params}</span>
                </p>
            </div>
            <div>
                {selected.map((item, index) => (
                    <div key={index}>
                        <div className='grid grid-cols-1 gap-6'>
                            <div className='border border-zinc-300 !p-3 rounded-sm grid md:grid-cols-2 gap-3'>
                                <img className='max-h-[50vh] w-full' src={item.img} alt="" />
                                <div className='!p-3 flex flex-col gap-2'>
                                    <p className='text-xl font-medium'>{item.name}</p>
                                    <p className='text-sm w-[80%] text-zinc-400'>{item.description}</p>
                                    <p className='text-sm text-zinc-700'>{`(${item.ratings})`}⭐⭐⭐⭐⭐</p>
                                    <p className='text-sm'>Course by: <span className='underline text-pink-500'>{item.instructor}</span></p>
                                    <p className='text-sm text-zinc-700'>Enrolled : <span className='underline text-pink-500'>50 students</span></p>
                                    <p className='text-2xl text-pink-500'>{item.price}</p>
                                    <p className='flex items-center gap-2 text-sm text-zinc-500'><img className='w-5' src={book} alt="" />{item.length} videos</p>
                                    <p className='tex-xs text-zinc-700 flex items-center gap-3'>Category: <span className='text-pink-500 underline'>{item.category}</span></p>
                                    <p className='tex-xs text-zinc-700 flex items-center gap-3'>Deadline: <span className='text-pink-500 underline'>{item.deadline}</span></p>
                                    <button onClick={() =>{newEnroll(item.name) , scrollTo(0 , 0)}} className='rounded bg-pink-500 text-white w-full cursor-pointer active:scale-95 duration-300 transition-all h-[5vh]'>Enroll Now</button>
                                </div>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <h1 className='text-xl font-medium'>Course List</h1>
                                <div className='grid md:grid-cols-2 gap-[3rem] md:gap-3'>
                                    <div className='flex flex-col gap-6'>
                                        {item.syllabus.map((syllabusItem, syllabusIndex) => (
                                            <div key={syllabusIndex} className='border border-zinc-300 rounded md:w-[75%]'>
                                                <h1
                                                    onClick={() => toggleSection(syllabusIndex)}
                                                    className='flex justify-between !p-2 cursor-pointer'
                                                >
                                                    {syllabusItem.topic}
                                                    <img src={openIndex === syllabusIndex ? down : up} alt="" />
                                                </h1>
                                                <div
                                                    className={`overflow-hidden transition-all duration-500 ease-in-out`}
                                                    style={{ maxHeight: openIndex === syllabusIndex ? '300px' : '0px', opacity: openIndex === syllabusIndex ? 1 : 0 }}
                                                >
                                                    <div className='!p-3 text-sm bg-zinc-200 transition-all duration-300 ease-in-out flex flex-col gap-3'>
                                                        {syllabusItem.content.map((item, index) => (
                                                            <div key={index}>
                                                                <li className='flex hover:text-pink-500 transition-all duration-300 cursor-pointer justify-between !p-1'>{item.name} <span>{item.duration}hr</span></li>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <div>
                                            <h1 className='text-xl font-medium'>What's in the course?</h1>
                                            <ul className='list-disc !p-6'>
                                                <li>Lifetime access with free updates.</li>
                                                <li>Step-by-step, hands-on project guidance online classes.</li>
                                                <li>Downloadable resources and source code.</li>
                                                <li>Quizzes and projects to test your knowledge.</li>
                                                <li>Certificate of completion.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h1 className='text-xl font-medium'>By the end of the course?</h1>
                                            {
                                                selected.map((item , index) => {
                                                    return <ul className='list-disc !p-6' key={index}>
                                                        {
                                                            item.outcomes.map((item , index) => {
                                                                return <li key={index}>{item}</li>
                                                            })
                                                        }
                                                    </ul>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Course;
