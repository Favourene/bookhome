import React, { useState, useEffect } from 'react'
import { commerce } from '../../lib/commerce'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import './children.css'
import 'swiper/swiper-bundle.css'

function Biography() {
  const [product, setProduct] = useState([])
  const fetchProduct = async () => {
    const { data } = await commerce.products.list({
      category_slug: ['biography'],
    })

    setProduct(data)
  }
  useEffect(() => {
    fetchProduct()
  }, [])
  return (
    <div className='children'>
      <div className='children__head'>
        <h1>BIOGRAPHIES BOOKS</h1>
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
        {product.map((child) => {
          return (
            <SwiperSlide key={child.id} className='children__swiper-slide'>
              <div className='children__swiper-card'>
                <Link
                  to={`/books/${child.attributes[5].value}`}
                  className='children__swiper-card-img'
                >
                  <img src={child.image.url} alt='' />
                </Link>
                <div className='children__swiper-card-text'>
                  <Link to={child.attributes[4].value}>
                    <p>{child.attributes[7].value}</p>
                  </Link>
                  <Link to={`/books/${child.attributes[5].value}`}>
                    <h1>{child.name}</h1>
                  </Link>
                  <p>
                    ${child.price.formatted}{' '}
                    <span>{child.price.formatted}</span>
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

export default Biography
