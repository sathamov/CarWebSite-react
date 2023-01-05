import React from 'react'

import { Clients } from '../components/Clients/Clients'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'


export const About = () => {
  return (
    <>
      <div className='about container'>
        <Header/>
        <Clients />
      </div>
      <Footer/>
    </>
  )
}
