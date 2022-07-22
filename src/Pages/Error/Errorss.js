import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/navbar/Navbar'
import './Error.scss'

function Error() {
  useEffect(() => {
    document.title = 'Error 404 - Book Home'
  }, [])
  return (
    <>
      <Navbar />
      <div className='error'>
        <div className='error-container'>
          <h1>oops!</h1>
          <h2>404 - PAGE NOT FOUND</h2>
          <p>
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable
          </p>
          <Link to='/'>
            <button>GO TO HOMEPAGE</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Error
