import React, { useState, useEffect } from 'react'
import { commerce } from '../../lib/commerce'
import { Link } from 'react-router-dom'
import './book.scss'

function Latest() {
  const [product, setProduct] = useState([])
  const fetchProduct = async () => {
    const { data } = await commerce.products.list({
      category_slug: ['latest'],
    })

    setProduct(data)
  }
  useEffect(() => {
    fetchProduct()
  }, [])
  return (
    <div className='book__wrap'>
      {product.map((best) => {
        return (
          <div key={best.id} className='book__wrap-card'>
            <div className='book__wrap-card-img'>
              <Link to={`/books/${best.attributes[5].value}`}>
                <img src={best.image.url} alt='' />
              </Link>
            </div>
            <Link
              className='book__wrap-card-h1'
              to={`/books/${best.attributes[5].value}`}
            >
              <h1>{best.name}</h1>
            </Link>
            <Link
              className='book__wrap-card-p'
              to={`/author/${best.attributes[4].value}`}
            >
              <p>{best.attributes[7].value}</p>
            </Link>
            <p className='book__wrap-card-price'>
              <span>{best.attributes[6].value}</span> ${best.price.formatted}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Latest
