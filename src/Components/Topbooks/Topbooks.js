import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import './Topbooks.css'
import Data from './Topdata'

// import Swiper core and required modules
import SwiperCore, { Autoplay } from 'swiper'

SwiperCore.use([Autoplay])

function Topbooks() {
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
          {Data.map((topbook) => {
            return (
              <SwiperSlide key={topbook.id} className='topbook__wrap-swip-card'>
                <Link to={`/books/${topbook.Links}`}>
                  <img src={topbook.Image} alt='' />
                </Link>
                <div>
                  <Link to={`/books/${topbook.Links}`}>
                    <h1>{topbook.Title}</h1>
                  </Link>
                  <p>
                    by{' '}
                    <span>
                      <Link to={topbook.AuthorLink}>{topbook.Author}</Link>
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
