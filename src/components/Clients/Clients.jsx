import React from 'react'

import Person1 from "../../images/person1.png"
import Person2 from "../../images/person2.png"
import Person3 from "../../images/person3.png"

import "./Clients.css"

export const Clients = () => {
  return (
    <div className='clients'>
      <h2 className="clients-heading">Lorem ipsum dolor sit amet.</h2>
      <p className="clients-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam praesentium delectus eos hic distinctio debitis numquam. Facere natus reiciendis consequuntur corporis molestiae, velit maxime quod vitae eveniet, possimus ipsa? Labore dicta qui enim perferendis fugiat temporibus corporis, quod magni dolore dolorum deleniti possimus delectus molestias perspiciatis, quam quos iusto reprehenderit!</p>

      <ul className="clients-list">
        <li className="clients-item">
          <img className='img' src={Person1} alt="client_photo" />
          <h4>John Doe</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, iusto.</p>
        </li>
        <li className="clients-item">
          <img className='img' src={Person2} alt="client_photo" />
          <h4>John Doe</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, iusto.</p>
        </li>
        <li className="clients-item">
          <img className='img' src={Person3} alt="client_photo" />
          <h4>John Doe</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, iusto.</p>
        </li>
      </ul>
    </div>
  )
}
