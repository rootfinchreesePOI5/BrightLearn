import React from 'react'
import { chat } from '../assets/images'
import { useNavigate } from 'react-router-dom'

function ChatBtn() {
    const navigate = useNavigate()
  return (
    <div onClick={() => navigate('/Chat')} className='bg-pink-500 w-[50px] h-[50px] cursor-pointer rounded-full flex items-center justify-center fixed top-[90%] left-[95%]'>
      <img src={chat} alt="" />
    </div>
  )
}

export default ChatBtn
