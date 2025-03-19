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
      <div style={token  ? {display:'none'} : {display:'flex'}} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non illo aliquid sed, blanditiis, at optio perferendis veniam placeat, quas ad cupiditate eius! Rerum natus exercitationem vero earum praesentium minus.
      </div>
    </div>
  )
}

export default Home
