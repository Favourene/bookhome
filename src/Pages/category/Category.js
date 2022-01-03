import React, { useEffect, useState } from 'react'
import './Category.css'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/navbar/Navbar'
import Data from './Data'
import { commerce } from '../../lib/commerce.js'

function Category() {
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
     document.title = 'Category - Book Home'
   }, [])
  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <section className='category'>
        <div className='category__head'>
          <h1>Shop By Category</h1>
          <p>Popular Books category</p>
        </div>
        <div className='category__wrap'>
          {Data.map((secs) => {
            return (
              <div className='category__wrap-card' key={secs.id}>
                <div className='category__wrap-card-img'>
                  <Link to={`/${secs.Links}`}>
                    <img src={secs.Image} alt='' />
                  </Link>
                </div>
                <div>
                  <Link to={`/${secs.Links}`}>
                    <h2>{secs.Word}</h2>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Category
