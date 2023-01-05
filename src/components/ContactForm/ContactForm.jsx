import React, { useState } from 'react'
import './ContactForm.css'
import { BiHomeAlt } from 'react-icons/bi';

import { BsFillTelephoneFill } from 'react-icons/bs';
import {MdOutlineEmail} from 'react-icons/md'

export const ContactForm = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        image: "",
        message: ""
      })
    
      const sendMessage = async(e) => {
        console.log(data);
        e.preventDefault()
        // let res = await axios.post(`http://echo.htmlacademy.ru`, {data})
    
        // console.log(res);
      }
    
      const handleFormValue = (e)=> {
        setData({...data, [e.target.name]: e.target.value})
    }

  return (
    <div className='contact w211' >
        
       <div className="container">

            <h1 className='contactus' data-text="Contact">Contact</h1>

        <div className="all-container">

            <div className="contact-col">

                <div>

                    <BiHomeAlt className='icon' />

                    <span>
                     <h5> Uzbekistan Toshkent Uz </h5>   
                     <p> Olmazor District 102a Building </p>
                    </span>

                </div>

                <div>

                    <BsFillTelephoneFill className='icon' />

                    <span>
                        <h5> +998 97 412 80 87 </h5> 
                        <p> Monday to Saturday, 9AM to 6PM </p>
                    </span>

                </div>

                <div>

                    <MdOutlineEmail className='icon' />

                    <span>
                        <h5> Sunnat9089@gmail.com </h5>
                        <p> Email es your query </p>
                    </span>

                </div>

            </div>

            <form onSubmit={sendMessage} action="#" className="contact-form">

            <div className="img-from">

                </div>

                    <input onChange={handleFormValue} type="text" className="contact-input" name='name' placeholder='Enter your Name'/>
                    <input onChange={handleFormValue} type="email" className="contact-input" name='email' placeholder='Enter your Email'/>
                    <input onChange={handleFormValue} type="file" className="contact-input" name='image'/>
                    <textarea onChange={handleFormValue} className='message-input' name="message" id="" cols="30" rows="10" placeholder='Write your message'></textarea>

                    <button className="contact-btn">Send Message</button>
                    </form>

                </div>

        </div>
      
    </div>
  )
}


