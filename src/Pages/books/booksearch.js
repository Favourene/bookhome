import React, { Component } from 'react'
import Data from '../../Components/Topbooks/Topdata'
class App extends Component {
  state = { searchInput: '', alphabet: '' }
  onSearchInputChange = (e) => {
    this.setState({ searchInput: e.target.value })
  }
  onAlphabetClick = (e) => {
    this.setState({ alphabet: e.target.value })
  }
  prepareAlphabets = () => {
    let result = []
    for (let i = 65; i < 91; i++) {
      result.push(
        <button
          type='button'
          key={i}
          onClick={this.onAlphabetClick}
          value={String.fromCharCode(i)}
        >
          {String.fromCharCode(i)}
        </button>
      )
    }
    return result
  }
  elementContainsSearchString = (searchInput, element) =>
    searchInput
      ? element.Author.toLowerCase().includes(searchInput.toLowerCase())
      : false
  filterItems = (Data) => {
    let result = []
    const { searchInput, alphabet } = this.state
    if (Data && (searchInput || alphabet)) {
      result = Data.filter(
        (element) =>
          element.Author.charAt(0).toLowerCase() === alphabet.toLowerCase() ||
          this.elementContainsSearchString(searchInput, element)
      )
    } else {
      result = Data || []
    }
    result = result.map((item) => (
      <div>
        <img src={item.Image} alt='' />
        <p>{item.Author}</p>
      </div>
    ))
    return result
  }
  render() {
    const filteredList = this.filterItems(Data)
    return (
      <div>
        <input type='search' onChange={this.onSearchInputChange} />
        {this.prepareAlphabets()}
        <div>{filteredList}</div>
      </div>
    )
  }
}

export default App
