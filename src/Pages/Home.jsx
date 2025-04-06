import React, { useContext } from 'react'
import Hero from '../Components/Hero'
import { AppContext } from '../Context/AppContext'
import Courses from '../Components/Courses'
import Books from '../Components/Books'
import Welcome from '../Components/Welcome'

function Home() {
  const {token} = useContext(AppContext)
  return (
    <div>
      <div style={token ? {display:'flex', flexDirection:'column'} : {display:'none' }} className='w-full flex flex-col gap-9 !pb-[5rem]'>
      <Hero/>
      <Courses/>
      <Books/>
      </div>
      <div style={token  ? {display:'none'} : {display:'flex'}} className='!pt-[8rem] !pb-[5rem]  w-full' >
        <Welcome/>
      </div>
    </div>
  )
}

export default Home
