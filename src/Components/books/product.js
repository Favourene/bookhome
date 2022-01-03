import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import './product.css'
import { commerce } from '../../lib/commerce.js'

function Product() {
  const { Links } = useParams()
  const [id, setId] = useState()
  const [image, setImage] = useState('default')
  const [title, setTitle] = useState('default')
  const [author, setAuthor] = useState('default')
  const [authorlink, setAuthorlink] = useState('default')
  const [price, setPrice] = useState('default')
  const [oldprice, setOldprice] = useState('default')
  const [publisher, setPublisher] = useState('default')
  const [pages, setPages] = useState('default')
  const [year, setYear] = useState('default')
  const [language, setLanguage] = useState('default')
  const [description, setDescription] = useState('default')

  const [cart, setCart] = useState({})

  const fetchProduct = async () => {
    const { data } = await commerce.products.list({ limit: 100 })

    return data
  }
  const fetchCart = async () => {
    const data = await commerce.cart.retrieve()
    return data
  }

  const handleCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }

  useEffect(() => {
    const ivie = async () => {
      fetchProduct().then((product) => {
        const newProduct = product.find(
          (product) => product.attributes[5].value === Links
        )
        setImage(newProduct.image.url)
        setTitle(newProduct.name)
        setAuthor(newProduct.attributes[7].value)
        setAuthorlink(newProduct.attributes[4].value)
        setPrice(newProduct.price.formatted)
        setOldprice(newProduct.attributes[6].value)
        setPublisher(newProduct.attributes[3].value)
        setPages(newProduct.attributes[2].value)
        setYear(newProduct.attributes[1].value)
        setLanguage(newProduct.attributes[0].value)
        setDescription(newProduct.description)
        setId(newProduct.id)
      })
    }
    const miracle = async () => {
      fetchCart().then((data) => {
        setCart(data)
      })
    }
    ivie()
    miracle()
  })
  return (
    <>
      <Navbar totalItems={cart.total_items} />
      <div className='product'>
        <div className='product__left'>
          <img src={image} alt='' />
        </div>
        <div className='product__right'>
          <div className='product__right-wrap'>
            <h1>{title}</h1>
            <h2>
              By{' '}
              <span>
                <Link to={`/${authorlink}`}>{author}</Link>
              </span>
            </h2>
            <h3>
              <span>{oldprice}</span> ${price}
            </h3>
            <p className='product__right-wrap-p'>{description.slice(3, -4)}</p>
            <div className='product__right-wrap-wrapper'>
              <div className='product__right-wrap-wrapper-left'>
                <p>Publisher:</p>
                <p>Pages:</p>
                <p>Year Published:</p>
                <p>Language:</p>
              </div>
              <div className='product__right-wrap-wrapper-right'>
                <p>{publisher}</p>
                <p>{pages}</p>
                <p>{year}</p>
                <p>{language}</p>
              </div>
            </div>
            <button onClick={() => handleCart(id, 1)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
