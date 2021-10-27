import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import Data from './childrendata'
import './children.css'
import 'swiper/swiper-bundle.css'

function children() {
  return (
    <div className='children'>
      <div className='children__head'>
        <h1>CHILDREN BOOKS</h1>
      </div>
      <Swiper
        className='children__swiper'
        slidesPerView={2}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        pagination={{}}
      >
        {Data.map((child) => {
          return (
            <SwiperSlide key={child.id} className='children__swiper-slide'>
              <div className='children__swiper-card'>
                <Link
                  to={`/books/${child.Links}`}
                  className='children__swiper-card-img'
                >
                  <img src={child.Image} alt='' />
                </Link>
                <div className='children__swiper-card-text'>
                  <Link to={child.AuthorLink}>
                    <p>{child.Author}</p>
                  </Link>
                  <Link to={`/books/${child.Links}`}>
                    <h1>{child.Title}</h1>
                  </Link>
                  <p>
                    ${child.Price} <span>{child.OldPrice}</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default children
