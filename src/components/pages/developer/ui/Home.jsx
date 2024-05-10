import React from 'react'
import Header from './header/Header'
import Project from './project/Project'
import Footer from './footer/Footer'
import About from './about/About'
import Banner from './banner/Banner'

const Home = () => {
  return (
    <div>
       <Header/> 
       <About/> 
       <Banner/> 
       <Project/> 
       <Footer/> 
    </div>
  )
}

export default Home