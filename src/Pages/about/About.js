import React, { useEffect, useState } from 'react'
import './About.scss'
import Navbar from '../../Components/navbar/Navbar'
import Top from '../../Components/To-top/top'
import { BsDropletFill } from 'react-icons/bs'
import { FaSeedling } from 'react-icons/fa'
import { GiBookCover } from 'react-icons/gi'
import { commerce } from '../../lib/commerce.js'

function About() {
  const [cart, setCart] = useState({})
  const fetchCart = async () => {
    const data = await commerce.cart.retrieve()
    return data
  }
  useEffect(() => {
    const miracle = async () => {
      fetchCart().then((data) => {
        setCart(data)
      })
    }
    miracle()
    document.title = 'About Book Home'
  }, [])
  return (
    <>
      <Navbar totalItems={cart.total_items} />
      <div className='about'>
        <div className='about__dp'>
          <img
            src='https://res.cloudinary.com/osaz/image/upload/v1635611778/Book%20Home/valdemaras-d-7VPFyhB_j8Y-unsplash_k4ohl6.jpg'
            alt=''
          />
        </div>
        <div className='about__text'>
          <h1>About</h1>
          <p>The most popular and most effective E-Library at Your Feet.</p>
        </div>
        <div className='about__details'>
          <p>
            Talking about bookstores can be little sad. In this age of
            everything electronic, traditional book shops — once a hub of
            creativity and debate — are struggling to keep their heads above
            water. Luckily, books and bookstores are suffused with a romanticism
            few other industries can rival— giving them at least one weapon
            against their digital competitors.
            <br />
            <br />
            Nowadays, the network plays an import role in people’s life. In the
            process of the improvement of the people’s living standard, people’s
            demands of the life’s quality and efficiency is more higher, the
            traditional bookstore’s inconvenience gradually emerge, and the
            online bookstore has gradually be used in public. The online
            bookstore is a revolution of book industry.
          </p>
          <p>
            The traditional bookstores’ operation time, address and space is
            limited, so the types of books and books to find received a degree
            of restriction. But the online bookstore broke the management mode
            of traditional bookstore, as long as you have a computer, you can
            buy the book anywhere, saving time and effort, shortening the time
            of book selection link effectively. The online bookstore system
            based on the principle of provides convenience and service to
            people.
            <br />
            <br />
            Online bookstore system is the main function of the trading platform
            for the site, consumers can connect to the Internet through the
            computer into the online bookstore and then check the book
            information, if you need to purchase should be registered landing,
            select their own books, submit orders and pay Operation to complete
            the entire book ordering process, to achieve online transactions
          </p>
        </div>
      </div>
      <div className='about__wrap'>
        <div className='about__wrap-card'>
          <div className='about__wrap-card-img'>
            <div className='about__wrap-card-img-bg'></div>
            <div className='about__wrap-card-img-image'>
              <img
                src='https://res.cloudinary.com/osaz/image/upload/v1635693314/Book%20Home/abo-03_770x_nd0tmd.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='about__wrap-card-text'>
            <FaSeedling />
            <h1>Seed of knowledge</h1>
            <p>
              The Internet has been favored by more and more people for its high
              efficiency and richness, and e-commerce has emerged. The online
              bookstore is a form of e-commerce and book sales industry in one
              form, it has many advantages, such as: Bookstore size is
              relatively small, cost savings; transaction activities can be
              anytime, anywhere, improve service efficiency, The information is
              complete, more convenient retrieval, the new book information on
              the new, consumers can see in a timely manner, trading activities
              can be launched immediately, so online bookstore in today's era of
              development is extremely rapid.
            </p>
            <p>
              Online bookstore system is the main function of the trading
              platform for the site, consumers can connect to the Internet
              through the computer into the online bookstore and then check the
              book information, if you need to purchase should be registered
              landing, select their own books, submit orders and pay Operation
              to complete the entire book ordering process, to achieve online
              transactions
            </p>
          </div>
        </div>
        <div className='about__wrap-card diff'>
          <div className='about__wrap-card-text'>
            <BsDropletFill />
            <h1>Give life to reading</h1>
            <p>
              With the online bookstore system, consumers do not need to blindly
              go to various places to find their own books, but only in a
              computer connected to the Internet log on online bookstore system,
              in the search box, type you want to find Of the book information
              retrieval, you can efficiently know whether the site has its own
              books, if you can online direct purchase, if not, you can change
              the home bookstore to continue to search or provide advice to the
              seller in order to supply, This greatly facilitates every
              consumer, saving time and labor.
            </p>
            <p>
              The online bookstore system can not only reduce costs, save time,
              space, to bring convenience to everyone, but also to promote the
              development of the logistics industry, serve three purposes,
              mutual benefit. More importantly, in today's world, the
              increasingly close ties between countries, more frequent
              exchanges, the economy tends to globalization, which promote the
              future development of online bookstore system has some practical
              significance.
            </p>
          </div>
          <div className='about__wrap-card-img'>
            <div className='about__wrap-card-img-bg'></div>
            <div className='about__wrap-card-img-image'>
              <img
                src='https://res.cloudinary.com/osaz/image/upload/v1635693318/Book%20Home/abo-02_770x_s3cj7s.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='about__wrap-card'>
          <div className='about__wrap-card-img'>
            <div className='about__wrap-card-img-bg'></div>
            <div className='about__wrap-card-img-image'>
              <img
                src='https://res.cloudinary.com/osaz/image/upload/v1635693309/Book%20Home/abo-01_770x_xp77pz.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='about__wrap-card-text'>
            <GiBookCover />
            <h1>Best for bookworms</h1>
            <p>
              The traditional bookstores’ operation time, address and space is
              limited, so the types of books and books to find received a degree
              of restriction. But the online bookstore broke the management mode
              of traditional bookstore, as long as you have a computer, you can
              buy the book anywhere, saving time and effort, shortening the time
              of book selection link effectively. The online bookstore system
              based on the principle of provides convenience and service to
              people.
            </p>
            <p>
              With the online bookstore system, consumers do not need to blindly
              go to various places to find their own books, but only in a
              computer connected to the Internet log on online bookstore system,
              in the search box, type you want to find Of the book information
              retrieval, you can efficiently know whether the site has its own
              books, if you can online direct purchase, if not, you can change
              the home bookstore to continue to search or provide advice to the
              seller in order to supply, This greatly facilitates every
              consumer, saving time and labor.
            </p>
          </div>
        </div>
      </div>
      <div className='about__end'>
        <div>
          <h1>Free Shipping</h1>
          <p>NO NEED PAY SHIP FEE</p>
        </div>
        <div>
          <h1>Secure Payment</h1>
          <p>100% SECURE PAYMENT</p>
        </div>
        <div>
          <h1>Support Customer</h1>
          <p>24 HOURS PER DAY</p>
        </div>
        <div>
          <h1>30 Days Return</h1>
          <p>SIMPLY RETURN WITHIN 30 DAYS</p>
        </div>
      </div>
      <Top />
    </>
  )
}

export default About
