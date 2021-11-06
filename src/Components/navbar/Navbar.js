import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsBag } from 'react-icons/bs';
import Logo from './logo.png'
import './Navbar.css'

const Navbar = () => {
  const [isActive, setActive] = useState('false')
  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <>
      <nav>
        <div className='logo'>
          <img className='logo1' src={Logo} alt='Logo' />
        </div>
        <div
          onClick={handleToggle}
          className={isActive ? 'hamburger' : 'hamburger toggle'}
        >
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
        <ul className={isActive ? 'nav-links' : 'nav-links open'}>
          <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
            <NavLink activeClassName='navbar__link' className='link' to='/'>
              Home
            </NavLink>
          </li>
          <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
            <NavLink
              activeClassName='navbar__link--active'
              className='link'
              to='/about'
            >
              About
            </NavLink>
          </li>
          <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
            <NavLink
              activeClassName='navbar__link--active'
              className='link'
              to='/books'
            >
              Books
            </NavLink>
          </li>
          <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
            <NavLink
              activeClassName='navbar__link--active'
              className='link'
              to='/events'
            >
              Events
            </NavLink>
          </li>
          <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
            <NavLink
              activeClassName='navbar__link--active'
              className='link'
              to='/category'
            >
              Categories
            </NavLink>
          </li>
          <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
            <NavLink
              activeClassName='navbar__link--active'
              className='link'
              to='/contact'
            >
              Contact Us
            </NavLink>
          </li>
          <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
            <NavLink
              activeClassName='navbar__link--active'
              className='link'
              to='/'
            >
              <BsBag />
              <span>0</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
