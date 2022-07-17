import React, { useState, useEffect } from 'react'
import { commerce } from '../../lib/commerce'
import { Link } from 'react-router-dom'
import './Artist.scss'

function Artist() {
  const [product, setProduct] = useState([])
  const fetchProduct = async () => {
    const { data } = await commerce.products.list({
      category_slug: ['danielle-steel'],
    })
    setProduct(data)
  }
  useEffect(() => {
    fetchProduct({})
  })
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
            Danielle Fernandes Dominique Schuelein-Steel (born August 14, 1947)
            is an American writer, best known for her romance novels. She is the
            bestselling author alive and the fourth-bestselling fiction author
            of all time, with over 800 million copies sold. As of 2021, she has
            written 190 books, including over 141 novels.
          </p>
        </div>
        <div className='artist__text-wrap'>
          {product.slice(0, 4).map((artmon) => {
            return (
              <div key={artmon.id} className='artist__text-wrap-card'>
                <Link to={`/books/${artmon.attributes[5].value}`}>
                  <img src={artmon.image.url} alt='' />
                </Link>
                <div>
                  <Link to={artmon.attributes[5].value}>
                    <h1>{artmon.name}</h1>
                  </Link>
                  <Link to={artmon.attributes[4].value}>
                    <p>{artmon.attributes[7].value}</p>
                  </Link>
                  <h3>
                    <span>{artmon.attributes[6].value}</span> $
                    {artmon.price.formatted}
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
