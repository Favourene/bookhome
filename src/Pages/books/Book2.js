import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/navbar/Navbar'
import './Book.scss'
import Data from '../../Components/books/data'
import Authorside from '../../Authors/Authorside'
import Top from '../../Components/To-top/top'
const para = Data.length
class Book extends Component {
  state = { searchInput: '', alphabet: '' }
  onSearchInputChange = (e) => {
    this.setState({ searchInput: e.target.value })
  }
  prepareAlphabets = () => {
    let result = []
    for (let i = 65; i < 91; i++) {}
    return result
  }
  componentDidMount() {
    document.title = `Book Library - Book Home`
  }
  elementContainsSearchString = (searchInput, element) =>
    searchInput
      ? element.Title.toLowerCase().includes(searchInput.toLowerCase())
      : false
  filterItems = (Data) => {
    let result = []
    const { searchInput, alphabet } = this.state
    if (Data && (searchInput || alphabet)) {
      result = Data.filter(
        (element) =>
          element.Title.charAt(0).toLowerCase() === alphabet.toLowerCase() ||
          this.elementContainsSearchString(searchInput, element)
      )
    } else {
      result = Data || []
    }
    result = result.map((item) => (
      <div key={item.id} className='major__wrap-main-card'>
        <Link className='major__wrap-main-card-img' to={`/books/${item.Links}`}>
          <img src={item.Image} alt='' />
        </Link>
        <div>
          <Link to={`/books/${item.Links}`}>
            <h2>{item.Title}</h2>
          </Link>
          <Link to={item.AuthorLink}>
            <h3>{item.Author}</h3>
          </Link>
          <p className='major__wrap-main-card-pra'>
            <span> {item.OldPrice}</span> ${item.Price}
          </p>
        </div>
      </div>
    ))
    return result
  }
  render() {
    const filteredList = this.filterItems(Data)
    return (
      <div>
        <Navbar />
        <section className='major'>
          <div className='major__head'>
            <h1>Available Books</h1>
            <p>Showing 1 - {para} results</p>
          </div>
          <div className='major__wrap'>
            <article className='major__wrap-sidebar'>
              <div>
                <input
                  type='search'
                  onChange={this.onSearchInputChange}
                  placeholder='Search For Book'
                />
              </div>
              <div>
                <Authorside />
              </div>
            </article>
            <main className='major__wrap-main'>{filteredList}</main>
          </div>
        </section>
        <Top />
      </div>
    )
  }
}

export default Book
