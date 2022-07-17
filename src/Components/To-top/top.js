import React, { useState } from 'react'
import { ImArrowUp } from 'react-icons/im'
import './top.scss'

function Top() {
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 400) {
      setVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    })
  }
  window.addEventListener('scroll', toggleVisible)
  return (
    <div className='top'>
      <button
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      >
        <ImArrowUp />
      </button>
    </div>
  )
}

export default Top
