import React, { useEffect, useState } from 'react'
import { courses } from '../assets/assets';
import { Link } from 'react-router-dom';

function Books() {
    const [myBooks , setBooks] = useState([]);

    const applyfilter = () =>{
        setBooks(courses.filter(item  => item.enrolled === true));
    }

    useEffect(() =>{
        applyfilter()
    },[courses])
  return (
    <div>
      <h1 className='text-xl' >My Books</h1>
      <div>
        {
            myBooks.length <= 0 ? 
            <p className='flex items-center justify-center !p-3  text-sm text-zinc-500'>You have no books enroll to get books</p> : 
            <div className='grid grid-cols-5 !p-6 gap-3 items-center'>
                {
                    myBooks.map((item , index) => {
                        return <div className='!p-[3%]' key={index}>
                            {item.resources.map((item , index) => {
                                return <Link target='_blank' to={`${item.link}`} className='text-black flex flex-col gap-1' key={index}>
                                    <img className='w-[100%]' src={item.img} alt="" />
                                    <p className='text-sm font-medium flex items-baseline gap-1'>{item.name} <span className='text-xs'>{item.type}</span></p>
                                </Link>
                            })}
                        </div>
                    })
                }
            </div>
        }
      </div>
    </div>
  )
}

export default Books
