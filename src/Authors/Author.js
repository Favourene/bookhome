import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../Components/navbar/Navbar'
import Loading from '../Components/Loading/Loading'
import { commerce } from '../lib/commerce'
import Authorside from './Authorside'

function Author() {
  const { name } = useParams()
  const [product, setProduct] = useState([])
  const [cart, setCart] = useState({})
  const [loading, setLoading] = useState(true)
  const [searchBook, setSearchBook] = useState('')
  const [filteredResults, setFilteredResults] = useState([])
  const [toggleLeft, setoggleLeft] = useState('false')

  const fetchProduct = async () => {
    const { data } = await commerce.products.list({
      category_slug: [name],
    })
    setProduct(data)
    setLoading(false)
  }
  console.log(name)
  const togglingLeft = () => {
    setoggleLeft(!toggleLeft)
  }
  const fetchCart = async () => {
    const data = await commerce.cart.retrieve()
    return data
  }
  useEffect(() => {
    const miracle = async () => {
      fetchCart().then((data) => {
        setCart(data)
      })
    }
    fetchProduct()
    miracle()
    document.title = `Authors - Book Home`
  }, [name])
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
    </>
  )
}

export default Author
