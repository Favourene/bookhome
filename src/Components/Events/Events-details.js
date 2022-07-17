import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Data from '../../Pages/Events/Data'
import { ImLocation, ImCalendar, ImClock } from 'react-icons/im'
import Navbar from '../navbar/Navbar'
import './Event.scss'

function Events() {
  const { Links } = useParams()
  const [image, setImage] = useState('default')
  const [title, setTitle] = useState('default')
  const [content1, setContent1] = useState('default')
  const [content2, setContent2] = useState('default')
  const [content3, setContent3] = useState('default')
  const [content4, setContent4] = useState('default')
  const [content5, setContent5] = useState('default')
  const [location, setLocation] = useState('default')
  const [locationlink, setLocationlink] = useState('default')
  const [date, setDate] = useState('default')
  const [datelink, setDatelink] = useState('default')
  const [time, setTime] = useState('default')

  useEffect(() => {
   const newEvent = Data.find((event)=> event.Links === Links)
   setImage(newEvent.Image)
   setTitle(newEvent.Title)
   setContent1(newEvent.Content1)
   setContent2(newEvent.Content2)
   setContent3(newEvent.Content3)
   setContent4(newEvent.Content4)
   setContent5(newEvent.Content5)
   setLocation(newEvent.Location)
   setLocationlink(newEvent.Locationlink)
   setDate(newEvent.Date)
   setDatelink(newEvent.Datelink)
   setTime(newEvent.Time)
   document.title = newEvent.Title + ' - Book Home' ;
  }, [Links])

  return (
    <>
      <Navbar />
      <section className='Event-details'>
        <div className='Event-details-hero'>
          <img className='Event-details-hero-img' src={image} alt='' />
        </div>
        <main className='Event-details-text'>
          <div>
            <h1>{title}</h1>
            <p>{content1}</p>
            <p>{content2}</p>
            <p>{content3}</p>
            <p>{content4}</p>
            <p>{content5}</p>
          </div>
          <div className='Event-details-text-details'>
            <div className='Event-details-text-details-card'>
              <div className='Event-details-text-details-card-i'>
                <a href={locationlink}>
                  <ImLocation />
                </a>
              </div>
              <div>
                <h2>Location</h2>
                <p> {location}</p>
              </div>
            </div>
            <div className='Event-details-text-details-card'>
              <div className='Event-details-text-details-card-i'>
                <a href={datelink}>
                  <ImCalendar />
                </a>
              </div>
              <div>
                <h2>Date</h2>
                <p> {date}</p>
              </div>
            </div>
            <div className='Event-details-text-details-card'>
              <div className='Event-details-text-details-card-i'>
                <ImClock />
              </div>
              <div>
                <h2>Time</h2>
                <p> {time}</p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Events
