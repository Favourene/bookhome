import React from 'react'
import './About.css'
import Navbar from '../../Components/navbar/Navbar'
import Top from '../../Components/To-top/top'
import { BsDropletFill } from 'react-icons/bs'
import {FaSeedling} from 'react-icons/fa'
import {GiBookCover} from 'react-icons/gi'

function About() {
  return (
    <>
      <Navbar />
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            impedit earum nesciunt accusamus rem adipisci et ea magnam veritatis
            quisquam sapiente sequi hic repellendus, sint veniam culpa. Quisquam
            natus similique id quas inventore, debitis autem aliquid assumenda
            laudantium ipsa optio?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium itaque reiciendis labore distinctio, laborum voluptas.
            Mollitia cumque quis voluptatem repellendus, ut ipsam laudantium
            repellat maiores perferendis consequatur, inventore officiis dicta
            reprehenderit ad ratione commodi tempora, sed labore fugiat facere
            accusamus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            harum quam saepe voluptates cumque eum at quod eligendi delectus
            illum quia dicta aperiam aspernatur laudantium vel, ipsam
            repellendus nostrum ullam architecto totam, aliquam earum velit
            perspiciatis! Libero totam laboriosam assumenda.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            veritatis minus, atque ullam mollitia error impedit corrupti! Eius
            dignissimos rerum beatae nihil laudantium est ullam labore, debitis
            ab commodi laborum. Itaque expedita saepe, tempore consectetur illum
            quia quis debitis omnis!
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              dolore autem reprehenderit voluptatum odit labore neque dicta,
              accusamus illo rerum ratione aspernatur aliquid natus laudantium
              vitae soluta voluptates deleniti doloremque?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              laudantium, non soluta consectetur possimus nihil optio modi vel
              magni sed consequuntur! Magni reiciendis nostrum, nemo vel aperiam
              explicabo provident alias.
            </p>
          </div>
        </div>
        <div className='about__wrap-card diff'>
          <div className='about__wrap-card-text'>
            <BsDropletFill />
            <h1>Give life to reading</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              dolore autem reprehenderit voluptatum odit labore neque dicta,
              accusamus illo rerum ratione aspernatur aliquid natus laudantium
              vitae soluta voluptates deleniti doloremque?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              laudantium, non soluta consectetur possimus nihil optio modi vel
              magni sed consequuntur! Magni reiciendis nostrum, nemo vel aperiam
              explicabo provident alias.
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              dolore autem reprehenderit voluptatum odit labore neque dicta,
              accusamus illo rerum ratione aspernatur aliquid natus laudantium
              vitae soluta voluptates deleniti doloremque?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              laudantium, non soluta consectetur possimus nihil optio modi vel
              magni sed consequuntur! Magni reiciendis nostrum, nemo vel aperiam
              explicabo provident alias.
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
