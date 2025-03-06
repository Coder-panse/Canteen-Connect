import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import Infoheader from '../component/Infoheader'
import Product from '../component/Product'
import Service from '../component/Service'
import Footer from '../component/Footer'

const Home = () => {

  return (
    <div>
        
        <Header/>
        <Infoheader/>
        <Product/>
        <Service/>
        
    </div>
  )
}

export default Home