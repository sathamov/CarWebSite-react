import React from 'react'
import { ContactForm } from '../components/ContactForm/ContactForm'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'


export const Contact = () => {
  return (
    <div className='Contact'>
      <div className='container'>
        <Header />
        <main>

          {/* <div className="text">

          <div className="img-banner">

          </div>

          <h1 className='contact-heading'>Contact with Us</h1>
          <p className='contact-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi debitis error autem neque tempore magnam unde qui quisquam consequatur nesciunt similique omnis eius, facilis harum soluta architecto ad nam expedita numquam odit laborum, totam nemo dolorum. Ratione totam quasi, vel aperiam saepe sed, amet, dolorum iusto consequuntur quod optio? Ut?</p>
          

          </div> */}

          <ContactForm/>
        </main>
      </div>

      <Footer />
    </div>
  )
}
