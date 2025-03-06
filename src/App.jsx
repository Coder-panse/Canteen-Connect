import { useState } from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu'
import Footer from './component/Footer'


function App() {


  return (
    <div className="mx-10 sm:mx-[10%] md:mx-[8%]">
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
