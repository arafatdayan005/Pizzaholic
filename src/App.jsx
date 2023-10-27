import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="mx-auto w-full lg:w-[80vw]">
        <Outlet></Outlet>
      </div>      
      <Footer></Footer>
    </>
  )
}

export default App
