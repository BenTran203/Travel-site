import React, { useEffect } from 'react'
import './app.scss'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'


const App = () => {

  //Fade up animation
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])

  return (
    <>
    <Navbar/>
    <Home/>  
    <Main/>
    <Footer/>
    </>
  )
}

export default App