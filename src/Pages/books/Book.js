import React, { useState, useEffect } from 'react'
import { commerce } from '../../lib/commerce'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/navbar/Navbar'
import './Book.css'
import Authorside from '../../Authors/Authorside'
import Top from '../../Components/To-top/top'
import Loading from '../../Components/Loading/Loading'

function Book() {
  const [product, setProduct] = useState([])
  const [cart, setCart] = useState({})
  const [searchBook, setSearchBook] = useState('')
  const [filteredResults, setFilteredResults] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchProduct = async () => {
    const { data } = await commerce.products.list({ limit: 100 })
    setProduct(data)
    setLoading(false)
  }
  const fetchCart = async () => {
    const data = await commerce.cart.retrieve()
    return data
  }
  const findBook = (found) => {
    setSearchBook(found)
    if (searchBook !== '') {
      const filteredBook = product.filter((item) => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchBook.toLowerCase())
      })
      setFilteredResults(filteredBook)
    } else {
      setFilteredResults(product)
    }
  }
  useEffect(() => {
    const miracle = async () => {
      fetchCart().then((data) => {
        setCart(data)
      })
    }
    miracle()
    fetchProduct()
    document.title = 'About Book Home'
  }, [])
  const para = product.length
  return loading ? (
    <Loading />
  ) : (
    <>
      <Navbar totalItems={cart.total_items} />
      <section className='major'>
        <div className='major__head'>
          <h1>Available Books</h1>
          <p>Showing 1 - {para} results</p>
        </div>
        <div className='major__wrap'>
          <div className='mobile-search'>
            <input
              type='search'
              placeholder='Search For Book'
              onChange={(e) => findBook(e.target.value)}
            />
          </div>
          <div className='wrap-wrap'>
            <article className='major__wrap-sidebar'>
              <div>
                <input
                  type='search'
                  placeholder='Search For Book'
                  onChange={(e) => findBook(e.target.value)}
                />
              </div>
              <div>
                <Authorside />
              </div>
            </article>
            <main className='major__wrap-main'>
              {searchBook.length > 1
                ? filteredResults.map((item) => (
                    <div key={item.id} className='major__wrap-main-card'>
                      <Link
                        className='major__wrap-main-card-img'
                        to={`/books/${item.attributes[5].value}`}
                      >
                        <img src={item.image.url} alt='' />
                      </Link>
                      <div>
                        <Link to={`/books/${item.attributes[5].value}`}>
                          <h2>{item.name}</h2>
                        </Link>
                        <Link to={item.attributes[4].value}>
                          <h3>{item.attributes[7].value}</h3>
                        </Link>
                        <p className='major__wrap-main-card-pra'>
                          <span> {item.attributes[6].value}</span> $
                          {item.price.formatted}
                        </p>
                      </div>
                    </div>
                  ))
                : product.map((item) => (
                    <div key={item.id} className='major__wrap-main-card'>
                      <Link
                        className='major__wrap-main-card-img'
                        to={`/books/${item.attributes[5].value}`}
                      >
                        <img src={item.image.url} alt='' />
                      </Link>
                      <div>
                        <Link to={`/books/${item.attributes[5].value}`}>
                          <h2>{item.name}</h2>
                        </Link>
                        <Link to={item.attributes[4].value}>
                          <h3>{item.attributes[7].value}</h3>
                        </Link>
                        <p className='major__wrap-main-card-pra'>
                          <span> {item.attributes[6].value}</span> $
                          {item.price.formatted}
                        </p>
                      </div>
                    </div>
                  ))}
            </main>
          </div>
        </div>
      </section>
      <Top />
    </>
  )
}

export default Book
