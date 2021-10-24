import React, { useState } from 'react'
import './App.css'
import Navbar from '../../Components/navbar/Navbar'
import Swiper from '../../Components/swiper/swipers'
import Best from '../../Components/books/best'

function App() {
  const [book, setBook] = useState('Best')
  return (
    <div className='App'>
      <Navbar />
      <Swiper />
      <div className='book'>
        <div className='book__header'>
          <div className='book__header-head'>
            <h1>Books</h1>
            <p>The most recent books that arrived in our Bookshop</p>
          </div>
          <div className='book__nav'>
            <ul className='book__nav-ul'>
              <li
                onClick={() => {
                  setBook('Best')
                }}
                className={`${book === 'Best' ? 'active' : ''}`}
              >
                BEST SELLING
              </li>
              <li
                onClick={() => {
                  setBook('Latest')
                }}
                className={`${book === 'Latest' ? 'active' : ''}`}
              >
                LATEST
              </li>
              <li
                onClick={() => {
                  setBook('Sale')
                }}
                className={`${book === 'Sale' ? 'active' : ''}`}
              >
                SALE
              </li>
            </ul>
          </div>
        </div>
        {book === 'Best' && <Best />}
        {book === 'Latest' && <div className='latest'>hd</div>}
        {book === 'Sale' && <div className='sale'>hd</div>}
      </div>
    </div>
  )
}

export default App
