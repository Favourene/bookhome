import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Data from './data.js'
import Navbar from '../navbar/Navbar'
import './product.css'

function Product() {
  const { Links } = useParams()
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

  useEffect(() => {
    const newProduct = Data.find((product) => product.Links === Links)
    setImage(newProduct.Image)
    setTitle(newProduct.Title)
    setAuthor(newProduct.Author)
    setAuthorlink(newProduct.AuthorLink)
    setPrice(newProduct.Price)
    setOldprice(newProduct.OldPrice)
    setPublisher(newProduct.Publisher)
    setPages(newProduct.Pages)
    setYear(newProduct.Year)
    setLanguage(newProduct.Language)
    setDescription(newProduct.Description)
    document.title = newProduct.Title + ' - Book Home';
  }, [Links])

  return (
    <>
      <Navbar />
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
                <Link to={authorlink}>{author}</Link>
              </span>
            </h2>
            <h3>
              <span>{oldprice}</span> ${price}
            </h3>
            <p className='product__right-wrap-p'>{description}</p>
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
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
