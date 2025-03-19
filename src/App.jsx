import React, { useContext } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { AppContext } from './Context/AppContext'
import Login from './Pages/Login'
import Nav from './Components/Nav'

function App() {
  const { theme , token } = useContext(AppContext);
  if (theme === 'light') {

  } else {

  }
  return (
    <div>
      <div className={`flex flex-col fixed w-full  ${theme === 'light' ? 'header' : 'dark-header'}`}>
        <Navbar />
        <Nav />
      </div>
      <div className={`flex flex-col ${token ? "!pt-[8rem] md:!pt-[8%]" : "md:!pt-[5%]"} !px-[2rem] md:!px-[5%]   gap-12 `}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
