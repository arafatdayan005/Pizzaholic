import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <Footer></Footer>
    </>
  )
}

export default App
