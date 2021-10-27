import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import 'swiper/swiper-bundle.css'
import './special.css'
import Data from './specialdata'

function special() {
  return (
    <div className='specia'>
      <div className='special-head'>
        <h1>SPECIAL OFFERS</h1>
      </div>
      <Swiper
        className='special'
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1000: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        pagination={{}}
      >
        {Data.map((offer) => {
          return (
            <SwiperSlide key={offer.id} className='special__card'>
              <Link to={offer.AuthorLink}>
                <p className='special__card-author'>{offer.Author}</p>
              </Link>
              <Link to={`/books/${offer.Links}`}>
                <h1>{offer.Title}</h1>
              </Link>
              <Link
                to={`/books/${offer.Links}`}
                className='special__card-image'
              >
                <img src={offer.Image} alt='' />
              </Link>
              <p className='special__card-price'>
                <span>{offer.OldPrice}</span> ${offer.Price}
              </p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default special
