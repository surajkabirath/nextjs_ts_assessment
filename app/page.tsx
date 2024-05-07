import React from 'react'
import Header from './components/header'
import Banner from './components/banner'
import About from './components/about'
import Profiting from './components/profiting'
import Vision from './components/vision'

const page = () => {
  return (
    <>
     <Header/>
     <Banner/>
     <About/>
     <Profiting/>
     <Vision/>
    </>
  )
}

export default page