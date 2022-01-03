import React, {useEffect, useState} from 'react'
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
import { commerce } from '../../lib/commerce.js'


function App({ totalItems }) {
  const [cart, setCart] = useState({})
  const fetchCart = async () => {
    const data = await commerce.cart.retrieve()
    return data
  }
  useEffect(() => {
    const miracle = async () => {
      fetchCart().then((data) => {
        setCart(data)
      })
    }
    miracle()
    document.title = 'Book-Home Homepage'
  }, [])
  return (
    <div className='App'>
      <Navbar totalItems={cart.total_items}/>
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
