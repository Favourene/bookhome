import React from 'react'
import Data from '../../Authors/Danielle-steel/Data'
import { Link } from 'react-router-dom'
import './Artist.css'

function Artist() {
  return (
    <div className='artist'>
      <div className='artist__img'>
        <img
          src='https://res.cloudinary.com/osaz/image/upload/v1635463119/Book%20Home/Books/Authors/Danielle-steel/0507_brigitte_lede_river_social_1_gqqwdt.png'
          alt=''
        />
      </div>
      <div className='artist__text'>
        <div className='artist__text-head'>
          <h2>AUTHOR OF THE MONTH</h2>
          <h1>Danielle Steel</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            blanditiis, voluptatem illo pariatur provident recusandae. Facilis,
            ducimus illo ex, est veritatis, praesentium labore iure odit maiores
            inventore quas repellendus veniam. Voluptates, animi earum!
            Necessitatibus doloribus quae eius, provident ducimus officia.
          </p>
        </div>
        <div className='artist__text-wrap'>
          {Data.slice(0, 4).map((artmon) => {
            return (
              <div key={artmon.id} className='artist__text-wrap-card'>
                <Link to={`/books/${artmon.Links}`}>
                  <img src={artmon.Image} alt='' />
                </Link>
                <div>
                  <Link to={artmon.Links}>
                    <h1>{artmon.Title}</h1>
                  </Link>
                  <Link to={artmon.AuthorLink}>
                    <p>{artmon.Author}</p>
                  </Link>
                  <h3>
                    <span>{artmon.OldPrice}</span> ${artmon.Price}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Artist
