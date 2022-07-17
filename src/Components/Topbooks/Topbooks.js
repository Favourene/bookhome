import React, { useState, useEffect } from 'react'
import { commerce } from '../../lib/commerce'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import './Topbooks.scss'


// import Swiper core and required modules
import SwiperCore, { Autoplay } from 'swiper'

SwiperCore.use([Autoplay])

function Topbooks() {
  const [product, setProduct] = useState([])
  const fetchProduct = async () => {
    const { data } = await commerce.products.list({
      category_slug: ['popular'],
    })

    setProduct(data)
  }
  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <div className='topbook'>
      <div className='topbook__head'>
        <h2>our</h2>
        <h1>TOP 10</h1>
        <p>Most popular books</p>
      </div>
      <div className='topbook__wrap'>
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1000: {
              slidesPerView: 4,
            },
            800: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          className='topbook__wrap-swip'
        >
          {product.map((topbook) => {
            return (
              <SwiperSlide key={topbook.id} className='topbook__wrap-swip-card'>
                <Link to={`/books/${topbook.attributes[5].value}`}>
                  <img src={topbook.image.url} alt='' />
                </Link>
                <div>
                  <Link to={`/books/${topbook.attributes[5].value}`}>
                    <h1>{topbook.name}</h1>
                  </Link>
                  <p>
                    by{' '}
                    <span>
                      <Link to={topbook.attributes[4].value}>
                        {topbook.attributes[7].value}
                      </Link>
                    </span>
                  </p>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Topbooks
