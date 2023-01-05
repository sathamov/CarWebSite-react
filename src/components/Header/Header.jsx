import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../images/logo.png"

import "./Header.css"

export const Header = () => {
  return (
    <header className='header-site'>
      <div className="header-content">
        <Link to={'/'}>
          <img src={Logo} alt="logo" className='logo-img'/>
        </Link>

        <ul className="nav-list">
          <li className="nav-item">
            <Link to={'/'}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to={'/about'}>About</Link>
          </li>
          <li className="nav-item">
            <Link to={'/contact'}>Contact</Link>
          </li>

          <li className="nav-item">
            <Link to={'/services'}>Services</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
