import React from 'react'

import {Header} from "../components/Header/Header.jsx"
import {Hero} from "../components/Hero/Hero.jsx"
import {Footer} from "../components/Footer/Footer.jsx"

export const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <Header />
      
          <Hero />
        
      </div>

      <Footer />
    </div>
  )
}
