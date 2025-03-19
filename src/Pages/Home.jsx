import React, { useContext } from 'react'
import Hero from '../Components/Hero'
import { AppContext } from '../Context/AppContext'

function Home() {
  const {token} = useContext(AppContext)
  return (
    <div>
      <div style={token ? {display:'flex', flexDirection:'column'} : {display:'none' }} className='w-full'>
      <Hero/>
      </div>
      <div style={token  ? {display:'none'} : {display:'flex'}} className='!pt-[8rem] h-[80vh] flex items-center' >
        <p className='text-sm text-gray-600'>You don't have an account.Create one and study!</p>
      </div>
    </div>
  )
}

export default Home
