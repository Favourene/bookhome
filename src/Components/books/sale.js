import React from 'react'
import { Link } from 'react-router-dom'
import Sale from './saledata'
import './book.css'

function latest() {
  return (
    <div className='book__wrap'>
      {Sale.map((best) => {
        return (
          <div key={best.id} className='book__wrap-card'>
            <div className='book__wrap-card-img'>
              <Link to={`/books/${best.Links}`}>
                <img src={best.Image} alt='' />
              </Link>
            </div>
            <Link className='book__wrap-card-h1' to={`/books/${best.Links}`}>
              <h1>{best.Title}</h1>
            </Link>
            <Link className='book__wrap-card-p' to={`/${best.AuthorLink}`}>
              <p>{best.Author}</p>
            </Link>
            <p className='book__wrap-card-price'>
              <span>{best.OldPrice}</span> ${best.Price}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default latest
