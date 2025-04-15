import React, { useCallback, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { client1, cloud, dot, dotB, fire, github, lms, logo, logout, menuB, menuW, react, setting, xB, xW } from '../assets/images'
import { AppContext } from '../Context/AppContext'
import { sidelinks } from '../assets/assets';
import { logOut } from '../auth';
import { toast } from 'sonner';
import LeaderBoard from './LeaderBoard.jsx';


function Navbar() {
  const { token, setToken, theme, page, setPage, sidemenu, setMenu , openMenu } = useContext(AppContext);
  

  const [status, setStatus] = useState('Logout');
  const handleLogout = async () => {
    try {
      await logOut();
      setMenu(false);
      localStorage.removeItem('token');
      setToken('');
      toast.success("User signed out successfully. 😒");
      navigate("/Login");
    } catch (error) {
      toast.error('Error logging out!')
    }
  }
  const userData =
  {
    username: 'abdiaziz',
    email: 'mohamedabdiaziz515@gmail.com',
    streak: 1
  };
  const navigate = useNavigate();
  return (
    <header className={`flex justify-between items-center !py-2 z !px-[5%]`}>
      <div className='flex items-center gap-1' onClick={() => { navigate('/'), scrollTo(0, 0) }}>
        <img className='w-8' src={cloud} alt="" />
        <h1>BrightLearn</h1>
      </div>
      {/* desktop navbar*/}
      <nav className=' md:flex'>
        {
          token ?
            <div className='flex items-center gap-3'>
              <div className='flex items-center gap-3 text-black !px-3 rounded-full !py-1'>
                <div className='flex items-center gap-1'>
                  <img src={fire} alt="" />
                  <span className='text-orange-500'>{userData.streak}</span>
                </div>
                <img onClick={() => {navigate('/profile'), scrollTo(0,0) , setMenu(false)}} className='w-10 rounded-full cursor-pointer' src={client1} alt="" />
              </div>
              <img style={theme === 'light' ? { display: 'flex' } : { display: 'none' }} onClick={() =>{openMenu(), setPage(1)}} src={sidemenu === false ? dot : xW} alt="" />
              <img style={theme === 'light' ? { display: 'none' } : { display: 'flex' }} onClick={openMenu} src={sidemenu === false ? dotB : xB} alt="" />
            </div> :
            <button onClick={() => {navigate('/Login') , scrollTo(0 , 0)}} className='bg-pink-500 text-white !py-2 text-sm !px-8 rounded-full active:scale-95 md:hover:bg-black transition-all duration-700 cursor-pointer'>Create Account</button>
        }
      </nav>
      <aside className={`absolute top-[101%] transition-all duration-700 ${sidemenu === false ? '-right-[100%]' : 'right-0'} w-full md:w-[25%] bg-white !p-6 h-screen flex flex-col gap-[12rem] md:gap-[14rem]`}>
        {
          page === 1 ?
            <div className='h-[80vh] flex flex-col justify-between'>
              <div>
                {
                  sidelinks.map((item, index) => {
                    return <ul className='flex flex-col h-[7vh]' key={index}>
                      <Link onClick={openMenu} to={`/${item.link}`} className='sidelink flex items-center gap-3'>
                        <img className='w-5' src={item.img} alt="" />
                        <li className='text-sm text-gray-800 hover:text-orange-500 transition-all duration-500'>{item.link}</li>
                      </Link>
                    </ul>
                  })
                }
                <button onClick={() => {handleLogout() , scrollTo(0 , 0)}} className='sidelink flex items-center gap-3 cursor-pointer'>
                  <img className='w-5' src={logout} alt="" />
                  <li className='text-sm text-gray-800 hover:text-orange-500 transition-all duration-500 list-none'>LogOut</li>
                </button>
              </div>
              <div className='flex flex-col gap-2 items-center justify-center'>
                <p className='text-sm text-gray-700'>sponsored by infinitedev</p>
                <p className='flex flex-col items-center'>
                  <img src={react} alt="" />
                  <span className='text-xs text-zinc-500'>version: 1.0.0.1</span>
                </p>
              </div>
            </div> :
            <div>
              <LeaderBoard/>
            </div>
        }
      </aside>
    </header>
  )
}

export default Navbar
