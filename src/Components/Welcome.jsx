import React, { useState } from 'react'
import { courses } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import Courses from './Courses';
import Testimonials from './Testimonials';
import { wave } from '../assets/images';

function Welcome() {
    const [dropdown, setdropdown] = useState(false);
    const [textValue, setText] = useState('');
    const opendropdown = () => {
        dropdown === false ? setdropdown(true) : setdropdown(false)
    }
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center gap-[5rem] w-full'>
            <div className='flex flex-col items-center justify-center  gap-2'>
                <p className='flex items-center gap-1 text-gray-500'>Hi! <img className='w-5' src={wave} alt="" />There welcome to BrightLearn</p>
                <h1 className='text-xl md:text-3xl text-center text-pink-500 firacode'>Learn How To Code And Fit In The New World Of Programming</h1>
                <p className='text-sm text-center text-gray-500'>Amazing instructors, interactive content, and a supportive community to help you achieve your goals.</p>
            </div>
            <div className='flex relative justify-between bg-white border border-gray-300 !p-3 rounded md:w-[70%]'>
                <p onClick={opendropdown} className='flex items-center cursor-pointer text-gray-500 outline-none w-full'>
                    {textValue || 'Search for a Course'}
                </p>

                <ul style={dropdown === false ? { display: 'none' } : { display: 'flex' }} className='absolute top-full left-0 border border-gray-300 !p-3 rounded flex flex-col gap-2 bg-white w-full '>
                    {
                        courses.map((item, index) => {
                            return <li onClick={() => [setText(item.name), opendropdown()]} className='text-sm cursor-pointer !p-3 border-b border-b-gray-100' key={index}>{item.name}</li>
                        })
                    }
                </ul>
                <button onClick={() => navigate(`/Courses/${textValue}`)} className='w-[120px] h-[5vh] bg-pink-500 text-white text-sm rounded active:scale-[0.98] cursor-pointer transition-all duration-500'>Search</button>
            </div>
            <Courses />
            <Testimonials />
        </div>
    )
}

export default Welcome
