import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/navbar/Navbar'
import Data from './Data'
import './Events.css'

function Events() {
  useEffect(() => {
    document.title = 'Events - Book Home'
  })
  return (
    <>
      <Navbar />
      <section className='events'>
        <div className='events__head'>
          <h1>Events</h1>
          <p>
            You are Invited to all our open house Events, Check back regularly
            for updates on Events
          </p>
        </div>
        <div className='events__wrap'>
          {Data.map((event) => {
            return (
              <div className='events__wrap-card' key={event.id}>
                <div className='events__wrap-card-img'>
                  <Link to={`/events/${event.Links}`}>
                    <img src={event.Image} alt='' />
                  </Link>
                </div>
                <div className='events__wrap-card-text'>
                  <Link to={`/events/${event.Links}`}>
                    <h1>{event.Title}</h1>
                  </Link>
                  <p>{event.Date}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Events
