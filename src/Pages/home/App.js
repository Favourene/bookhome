import React from 'react'
import './App.css'
import Navbar from '../../Components/navbar/Navbar'
import Swiper from '../../Components/swiper/swipers'
import Display from '../../Components/books/display'
import Newsletter from '../../Components/newsletter/newsletter'
import BookDisplay from '../../Components/bookDisplay/bookDisplay'
import Wonderful from '../../Components/wonderful/wonderful'
import Artist from '../../Components/artist/Artist'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Swiper />
      <Display />
      <Newsletter />
      <BookDisplay />
      <Wonderful />
      <Artist />
    </div>
  )
}

export default App
