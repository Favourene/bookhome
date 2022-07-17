import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import Authorside from '../../../Authors/Authorside'
import Data from './Data'
import '../../../Authors/general.scss'
import Top from '../../To-top/top'

const para = Data.length
function Action() {
  useEffect(() => {
    document.title = 'Action Books - Category'
  }, [])
  return (
    <div>
      <Navbar />
      <section className='auth-head'>
        <div className='major__head'>
          <h1>Action Books</h1>
          <p>Showing 1 - {para} results</p>
        </div>
      </section>
      <section className='authors'>
        <article className='authors__side'>
          <Authorside />
        </article>
        <main className='authors__main'>
          {Data.map((item) => {
            return (
              <div key={item.id} className='authors__main-card'>
                <Link to={`/books/${item.Links}`}>
                  <img src={item.Image} alt='' />
                </Link>
                <div>
                  <Link to={`/books/${item.Links}`}>
                    <h2>{item.Title}</h2>
                  </Link>
                  <Link to={item.AuthorLink}>
                    <h3>{item.Author}</h3>
                  </Link>
                  <p className='author__wrap-main-card-pra'>
                    <span> {item.OldPrice}</span> ${item.Price}
                  </p>
                </div>
              </div>
            )
          })}
        </main>
      </section>
      <Top />
    </div>
  )
}

export default Action
