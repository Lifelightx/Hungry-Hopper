import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function Layout({onloginClick}) {
  return (
    <div>
      <Navbar onloginClick= {onloginClick}  />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
