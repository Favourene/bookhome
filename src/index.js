import React from 'react'
import ReactDOM from 'react-dom'
import { Context } from './lib/Context'
import './index.css'
import App from './App'

ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById('root')
)
