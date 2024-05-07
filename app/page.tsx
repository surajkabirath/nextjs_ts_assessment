import React from 'react'
import Header from './components/header'
import Banner from './components/banner'
import About from './components/about'
import Profiting from './components/profiting'
import Accordions from './components/accordion'

const page = () => {
  return (
    <>
     <Header/>
     <Banner/>
     <About/>
     <Profiting/>
     <Accordions/>
    </>
  )
}

export default page