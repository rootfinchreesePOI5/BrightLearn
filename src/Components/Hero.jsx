import React, { useContext, useState } from 'react'
import { rightB, rightW } from '../assets/images';
import { AppContext } from '../Context/AppContext';
import PBC from './PBC';
import DailyQuiz from './DailyQuiz';

function Hero() {
  const [heroMenu, setMenu] = useState(false);
  const { theme, userData } = useContext(AppContext);
  return (
    <div className='flex flex-col gap-8 h-screen'>
      {/* hero page */}
      {/* hero-heading */}
      <div className='flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-between w-full'>
        <div>
          <h1 className='text-2xl font-medium'>Good Morning,{userData.name}👋</h1>
          <p className='text-sm font-medium text-gray-600'>Welcome to BrightLearn, keep your learning a priority.</p>
        </div>
        <PBC/>
      </div>
      {/* hero container */}
      <DailyQuiz/>
    </div>
  )
}

export default Hero
