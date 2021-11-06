import React, { useEffect } from 'react'
import './Contact.css'
import Navbar from '../../Components/navbar/Navbar'
import { ImLocation, ImPhone, ImEnvelop } from 'react-icons/im'

function Contact() {
  useEffect(() => {
    document.title = 'Contact Us - Book Home'
  })
  return (
    <div>
      <Navbar />
      <section className='map'>
        <iframe
          className='map-where'
          title='Fresh'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0470045519896!2d3.387721614770646!3d6.515734995286908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d24c04d3e75%3A0x7347f1a6be13e004!2sUNILAG%20Nigeria!5e0!3m2!1sen!2sng!4v1636151074672!5m2!1sen!2sng'
          allowFullScreen=''
          loading='lazy'
        ></iframe>
        <div className='map-wrap'>
          <div className='map-wrap-card'>
            <div className='map-wrap-card-i'>
              <a href='https://goo.gl/maps/s9sqsfq2gBzkz3rB6'>
                <ImLocation />
              </a>
            </div>
            <div>
              <h2>Location</h2>
              <p> Anywhere</p>
            </div>
          </div>
          <div className='map-wrap-card'>
            <div className='map-wrap-card-i'>
              <a href='tel:+2349074498191'>
                <ImPhone />
              </a>
            </div>
            <div>
              <h2>Phone</h2>
              <p> +123 456 789 0098</p>
            </div>
          </div>
          <div className='map-wrap-card'>
            <div className='map-wrap-card-i'>
              <a href='mailto:igbinosaiwinosa01@gmail.com'>
                <ImEnvelop />
              </a>
            </div>
            <div>
              <h2>Email</h2>
              <p>Fresh@gmial.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
