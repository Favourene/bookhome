import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'


import './swiper.scss'

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from 'swiper'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade])

export default function App() {
  return (
    <>
      <div className='swiper-wrap'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{}}
          effect={'fade'}
          className='mySwiper'
        >
          <SwiperSlide className='main'>
            <div className='slide'>
              <p>COME AND JOIN THE READING CLUB</p>
              <h1>Enjoy the silence and comfort reading from your room.</h1>
              <button>SEE MORE</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className='main2'>
            <div className='slide'>
              <p>COME AND JOIN THE READING CLUB</p>
              <h1>Ebooks, The Easier way.</h1>
              <button>SEE MORE</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className='main3'>
            <div className='slide'>
              <p>COME AND JOIN THE READING CLUB</p>
              <h1>We are all it takes to acquire the Right Knowledge.</h1>
              <button>SEE MORE</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
