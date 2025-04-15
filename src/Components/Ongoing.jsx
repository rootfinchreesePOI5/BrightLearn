import React, { useState } from 'react'
import { courses } from '../assets/assets';
import { book, clock } from '../assets/images';

function Ongoing() {
  const [OngoingClasses, setCLasses] = useState(courses.slice(0, 2));
  const [changeView , setChange] = useState(false);
  const view = () => {
    if(changeView === false){
      setChange(true);
      setCLasses(courses); 
    }else
    {
      setChange(false);
      setCLasses(courses.slice(0 , 2));
    }
  }
  return (
    <div>
      <h1 className='text-sm font-medium'>On Going Learning Content...</h1>
      <div>
        {
          courses.length <= 0 ?
            <div className='!p-6 w-full flex items-center justify-center'>
              <button className='bg-pink-500 !p-2 cursor-pointer text-sm text-white rounded-sm w-[20%]'>Start a class now</button>
            </div> :
            <div>
              <div className='w-full flex justify-end'>
                <button onClick={view} className='text-sm !p-1 !px-5 cursor-pointer active:scale-[0.95] transition-all duration-500 border-gray-400 border rounded-sm '>{ !changeView ? 'View All' : 'Hide'}</button>
              </div>
              <div className='flex flex-col gap-3 !p-3'>
                {
                  OngoingClasses.map((item, index) => {
                    return <div className='mygrid w-[70%] !p-2 border border-gray-200 rounded-sm' key={index}>
                      <img className='max-h-[30vh] w-[50%] rounded-md' src={item.img} alt="" />
                      <div className='flex justify-between gap-5'>
                        <p className='text-xs flex flex-col gap-5 text-zinc-400'>Course <span className='text-sm font-medium text-black '>{item.name}</span></p>
                        <div className='text-xs flex flex-col gap-5 text-zinc-400'>Completion
                          <div className=' font-medium text-black '>
                            {
                              item.completion === 0 ?
                                <span>-</span> :
                                <p className='flex items-center gap-3'><span className='bg-transparent border-2 w-[19px] h-[2.5vh] border-green-400  rounded-full'></span>{item.completion}%</p>
                            }
                          </div>
                        </div>
                      <button className='!px-5  h-10 rounded-sm !p-1 text-sm cursor-pointer  border border-zinc-300'>
                        {
                          item.completion === 0 ?
                            'Start'
                            :
                            'Continue'
                        }
                      </button>
                      </div>
                    </div>
                  })
                }
              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default Ongoing
