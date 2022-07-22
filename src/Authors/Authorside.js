import React from 'react'
import Authordata from '../Authors/AuthorsData'
import { Link } from 'react-router-dom'
import './Authorside.scss'

function Authorside() {
  const pathname = window.location.pathname
  console.log(pathname)
  return (
    <div className='Authorside'>
      <h1>Authors</h1>
      <div>
        <ul>
          {Authordata.sort((a, b) => a.Author.localeCompare(b.Author)).map(
            (data) => {
              return (
                <div key={data.id}>
                  <Link to={`/author/${data.AuthorLink}`}>
                    <li
                      className={
                        pathname.includes(data.AuthorLink) ? 'active' : ''
                      }
                    >
                      <p>{data.Author}</p>
                    </li>
                  </Link>
                </div>
              )
            }
          )}
        </ul>
      </div>
    </div>
  )
}

export default Authorside
