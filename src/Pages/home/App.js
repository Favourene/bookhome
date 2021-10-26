import React, { useState } from 'react'
import './App.css'
import Navbar from '../../Components/navbar/Navbar'
import Swiper from '../../Components/swiper/swipers'
import Best from '../../Components/books/best'
import Latest from '../../Components/books/latest'
import Sale from '../../Components/books/sale'
import Newsletter from '../../Components/newsletter/newsletter'

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
        {book === 'Latest' && <Latest />}
        {book === 'Sale' && <Sale />}
      </div>
      <Newsletter />
    </div>
  )
}

export default App
