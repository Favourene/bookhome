import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { commerce } from '../../lib/commerce'
import Navbar from '../../Components/navbar/Navbar'
import Authorside from '../Authorside'
import Loading from '../../Components/Loading/Loading'
import '../general.css'

function Author() {
  const [product, setProduct] = useState([])
  const [cart, setCart] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchProduct = async () => {
    const { data } = await commerce.products.list({
      category_slug: ['jordan-b-peterson'],
    })
    setProduct(data)
    setLoading(false)
  }
  const fetchCart = async () => {
    const data = await commerce.cart.retrieve()
    return data
  }
  const Amount = product.length

  useEffect(() => {
    const miracle = async () => {
      fetchCart().then((data) => {
        setCart(data)
      })
    }
    fetchProduct()
    miracle()
    document.title = `Authors - Book Home`
  })
  return loading ? (
    <Loading />
  ) : (
    <>
      <Navbar totalItems={cart.total_items} />
      <section className='auth-head'>
        <div className='major__head'>
          <h1>Available Books</h1>
          <p>Showing 1 - {Amount} results</p>
        </div>
      </section>
      <section className='authors'>
        <article className='authors__side'>
          <Authorside />
        </article>
        <main className='authors__main'>
          {product.map((item) => {
            return (
              <div key={item.id} className='authors__main-card'>
                <Link to={`/books/${item.attributes[5].value}`}>
                  <img src={item.image.url} alt='' />
                </Link>
                <div>
                  <Link to={`/books/${item.attributes[5].value}`}>
                    <h2>{item.name}</h2>
                  </Link>
                  <Link to={item.attributes[4].value}>
                    <h3>{item.attributes[7].value}</h3>
                  </Link>
                  <p className='author__wrap-main-card-pra'>
                    <span> {item.attributes[6].value}</span> $
                    {item.price.formatted}
                  </p>
                </div>
              </div>
            )
          })}
        </main>
      </section>
    </>
  )
}

export default Author
