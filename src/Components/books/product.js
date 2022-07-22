import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../lib/Context'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import './product.scss'
import { commerce } from '../../lib/commerce.js'
import Loading from '../Loading/Loading'

function Product({ notify }) {
  const { setCart } = useGlobalContext()
  const [loading, setLoading] = useState(true)
  const { Links } = useParams()
  const [id, setId] = useState()
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [authorlink, setAuthorlink] = useState('')
  const [price, setPrice] = useState('')
  const [oldprice, setOldprice] = useState('')
  const [publisher, setPublisher] = useState('')
  const [pages, setPages] = useState('')
  const [year, setYear] = useState('')
  const [language, setLanguage] = useState('')
  const [description, setDescription] = useState('')

  const fetchProduct = async () => {
    const { data } = await commerce.products.list({ limit: 100 })
    setLoading(false)
    return data
  }
  const handleCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
    console.log(item)
    if (item.success) {
      notify('success', `${title} added to cart`)
      console.log('sucess')
    }
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
    ivie()
  }, [Links])
  return loading ? (
    <Loading />
  ) : (
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
                <Link to={`/author/${authorlink}`}>{author}</Link>
              </span>
            </h2>
            <h3>
              <span>{oldprice}</span> ${price}
            </h3>
            <p className='product__right-wrap-p'>
              A brand-new edition to help you lift your energy, unlock a higher
              frequency, and start receiving more joy and miracles in your
              life!Everything is comprised of energy, including you! You express
              energy in what you create, experience, and attract. Right now, the
              Universe is calling you to align your life to a higher energetic
              frequency, and at any given moment you have the opportunity to
              Raise Your Vibration.
            </p>
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
