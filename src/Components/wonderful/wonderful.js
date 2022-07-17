import React from 'react'
import { Link } from 'react-router-dom'
import './wonderful.scss'

function wonderful() {
  return (
    <div className='wonderful'>
      <div className='wonderful__wrap'>
        <h1>Wonderful Gifts</h1>
        <p>Give your family and friends a book today</p>
        <Link to='/books'>
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  )
}

export default wonderful
