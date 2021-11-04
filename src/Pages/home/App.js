import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Swiper from '../../Components/swiper/swipers'
import Display from '../../Components/books/display'
import Newsletter from '../../Components/newsletter/newsletter'
import BookDisplay from '../../Components/bookDisplay/bookDisplay'
import Wonderful from '../../Components/wonderful/wonderful'
import Artist from '../../Components/Artist-of-the-month/Artist'
import Topbooks from '../../Components/Topbooks/Topbooks'
import Noted from '../../Components/Noted-authors/Noted'
import Top from '../../Components/To-top/top'

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
      <Topbooks />
      <Noted />
      <Top />
    </div>
  )
}

export default App
