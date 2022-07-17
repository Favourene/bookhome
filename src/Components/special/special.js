import React, { useState, useEffect } from 'react'
import { commerce } from '../../lib/commerce'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import 'swiper/swiper-bundle.css'
import './special.scss'

function Special() {
  const [product, setProduct] = useState([])
  const fetchProduct = async () => {
    const { data } = await commerce.products.list({
      category_slug: ['special-offer'],
    })

    setProduct(data)
  }
  useEffect(() => {
    fetchProduct()
  }, [])
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
        {product.map((offer) => {
          return (
            <SwiperSlide key={offer.id} className='special__card'>
              <Link to={offer.attributes[4].value}>
                <p className='special__card-author'>
                  {offer.attributes[7].value}
                </p>
              </Link>
              <Link to={`/books/${offer.attributes[5].value}`}>
                <h1>{offer.name}</h1>
              </Link>
              <Link
                to={`/books/${offer.attributes[5].value}`}
                className='special__card-image'
              >
                <img src={offer.image.url} alt='' />
              </Link>
              <p className='special__card-price'>
                <span>{offer.price.formatted}</span> ${offer.price.formatted}
              </p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Special
