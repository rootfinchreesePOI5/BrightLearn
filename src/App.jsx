import React, { useContext } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { AppContext } from './Context/AppContext'
import Login from './Pages/Login'
import Nav from './Components/Nav'
import StudentDashboard from './Pages/StudentDashboard'
import Survey from './Pages/Survey'
import { Toaster } from 'sonner'
import { cloud } from './assets/images'
import Learning from './Pages/Learning'
import Catalog from './Pages/Catalog'
import Favorites from './Pages/Favorites'
import Profile from './Pages/Profile'
import Themes from './Pages/Themes'
import Notification from './Pages/Notification'
import Security from './Pages/Security'
import AllCourses from './Components/AllCourses'
import Course from './Components/Course'
import ChatBtn from './Components/ChatBtn'
import Chat from './Pages/Chat'
import Footer from './Components/Footer'

function App() {
  const { theme , token } = useContext(AppContext);
  if (theme === 'light') {

  } else {

  }
  return (
    <div>
      <Toaster  position='bottom-right'  richColors/>
      <div className={`flex flex-col fixed w-full z-50  ${theme === 'light' ? 'header' : 'dark-header'}`}>
        <Navbar />
        <Nav />
      </div>
      <div className={`flex flex-col ${token ? "!pt-[8rem]  md:!pt-[8%] !pb-[8rem]" : "md:!pt-[5%]"} !pb-[5rem] !px-[2rem] md:!px-[5%] gap-12  `}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Courses' element={<AllCourses />} />
          <Route path='/Chat' element={<Chat/>} />
          <Route path='/Courses/:id' element={<Course />} />
          <Route path='/dashboard' element={<StudentDashboard />}/>
          <Route path='/My-learning' element={<Learning />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/themes' element={<Themes />} />
          <Route path='/notifications' element={<Notification />} />
          <Route path='/security' element={<Security />} />
          <Route path='/setup-account' element={<Survey/>}/>
        </Routes>
      </div>
      {
        token ? <div>
          <ChatBtn/>
          <Footer/>
        </div>
        : <div>
          <Footer/>
        </div>
      }
    </div>
  )
}

export default App
