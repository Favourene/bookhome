import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './logo.png'
import './footer.scss'

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='footer__wrap'>
          <div className='footer__wrap-img'>
            <img src={Logo} alt='' />
            <p>Enjoy the comfort of reading from your room</p>
          </div>
          <div className='footer__wrap-list'>
            <ul>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink to='/books'>Books</NavLink>
              </li>
              <li>
                <NavLink to='/events'>Events</NavLink>
              </li>
              <li>
                <NavLink to='/category'>Categories</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div className='footer__wrap-list'>
            <ul>
              <li>
                <NavLink to='/adventure'>Adventure</NavLink>
              </li>
              <li>
                <NavLink to='/art'>Art</NavLink>
              </li>
              <li>
                <NavLink to='/biography'>Biography</NavLink>
              </li>
              <li>
                <NavLink to='/children-book'>Children</NavLink>
              </li>

              <li>
                <NavLink to='/mystery'>Mystery</NavLink>
              </li>
              <li>
                <NavLink to='/science'>Science</NavLink>
              </li>
            </ul>
          </div>
          <div className='footer__wrap-cont'>
            <li>
              <b>Tel:</b> +234 9074 4498 191
            </li>
            <li>
              <b>Email:</b> bookhomesup@gmail.com
            </li>
            <li>
              <b>&copy;</b> Copyright .{' '}
              <span>
                <a href='https://www.iwinosa.me/'>
                  <span className='me'>Osasdev</span>
                </a>
              </span>{' '}
              . 2021
            </li>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
