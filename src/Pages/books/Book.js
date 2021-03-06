import React, { useState, useEffect } from 'react'
import { commerce } from '../../lib/commerce'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/navbar/Navbar'
import './Book.scss'
import Authorside from '../../Authors/Authorside'
import Top from '../../Components/To-top/top'
import Loading from '../../Components/Loading/Loading'

function Book() {
  const [product, setProduct] = useState([])
  const [searchBook, setSearchBook] = useState('')
  const [filteredResults, setFilteredResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [toggleLeft, setoggleLeft] = useState('false')

  const togglingLeft = () => {
    setoggleLeft(!toggleLeft)
  }
  const fetchProduct = async () => {
    const { data } = await commerce.products.list({ limit: 100 })
    setProduct(data)
    setLoading(false)
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
    fetchProduct()
    document.title = 'About Book Home'
  }, [])
  const para = product.length
  return loading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <section className='major'>
        <div className='major__wrap'>
          <div className='wrap-wrap'>
            <article
              className={
                toggleLeft ? 'major__wrap-sidebar' : 'major__wrap-sidebar show'
              }
            >
              <div className='hamburgerzy'>
                <FaTimes onClick={togglingLeft} />
              </div>
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
            <div className='cover'>
              <div className='hamburgerzz'>
                <FaBars onClick={togglingLeft} />
              </div>
              <div className='major__head'>
                <h1>Available Books</h1>
                <p>Showing 1 - {para} results</p>
              </div>
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
                          <Link to={`/author/${item.attributes[4].value}`}>
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
                          <Link to={`/author/${item.attributes[4].value}`}>
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
        </div>
      </section>
      <Top />
    </>
  )
}

export default Book
