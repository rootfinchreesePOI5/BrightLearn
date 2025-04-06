import React, { useState, useEffect } from 'react';
import { courses } from '../assets/assets';
import { book } from '../assets/images';

function Upcoming() {
  const calculateTimeLeft = (targetDate) => {
    const difference = targetDate - new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  return (
    <div className='!py-[5rem]'>
      <h1 className='text-xl'>Upcoming courses</h1>
      <div>
        {courses.slice(4, 6).map((item, index) => {
          const targetDate = new Date(item.startDate); // Ensure 'startDate' exists in the course object
          const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

          useEffect(() => {
            const timer = setInterval(() => {
              setTimeLeft(calculateTimeLeft(targetDate));
            }, 1000);

            return () => clearInterval(timer);
          }, [targetDate]);

          return (
            <div key={index} className='!p-3 flex gap-9 items-center'>
              <img className='max-w-[500px] rounded-md' src={item.img} alt="" />
              <div className='flex flex-col gap-2'>
                <p className='font-medium text-4xl'>{item.name}</p>
                <p className='text-xl underline list-disc'>{item.syllabus.length} weeks Journey </p>
                <p className='flex gap-3 items-center text-sm'><img src={book} alt="" />{item.length} hours</p>
                <p className='!p-3 text-sm text-zinc-500'>A full stack boot camp design 6 projects used in our day to day life and improve your skills as a developer, the project teaches you mern stack, react, mongodb as the database, express and node js for the server and API. You will also take a test to demonstrate your skills after the completion of the course.</p>
                <p className='!p-1 flex gap-3 items-center'>
                  Remaining Time: 
                  <span className='text-xl text-pink-500'>{timeLeft.days}d</span>
                   <span className='text-xl text-pink-500'>{timeLeft.hours}h</span>
                    <span className='text-xl text-pink-500'>{timeLeft.minutes}m </span>
                    <span className='text-xl text-pink-500'>{timeLeft.seconds}s</span>
                </p>
                <p className='!p-1 text-xl font-medium'>50$</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Upcoming;
