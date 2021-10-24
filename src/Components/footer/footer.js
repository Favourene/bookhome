import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './logo.png'
import './footer.css'

function footer() {
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
                <NavLink to='/'>About</NavLink>
              </li>
              <li>
                <NavLink to='/'>Books</NavLink>
              </li>
              <li>
                <NavLink to='/'>Event</NavLink>
              </li>
              <li>
                <NavLink to='/'>Blogs</NavLink>
              </li>
              <li>
                <NavLink to='/'>Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div className='footer__wrap-list'>
            <ul>
              <li>
                <NavLink to='/'>Best Sellers</NavLink>
              </li>
              <li>
                <NavLink to='/'>Biography</NavLink>
              </li>
              <li>
                <NavLink to='/'>Children</NavLink>
              </li>
              <li>
                <NavLink to='/'>Fiction</NavLink>
              </li>
              <li>
                <NavLink to='/'>Mystery</NavLink>
              </li>
              <li>
                <NavLink to='/'>Political</NavLink>
              </li>
            </ul>
          </div>
          <div className='footer__wrap-cont'>
            <li>
              <b>Tel:</b> +123 4565 7685
            </li>
            <li>
              <b>Email:</b> Fresh@bookhome.com
            </li>
            <li>
              <b>&copy;</b> Copyright .{' '}
              <span>
                <a href='https://www.iwinosa.me/'>
                  <span className="me">Osasdev</span>
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

export default footer
