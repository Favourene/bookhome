import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import Footer from './Components/footer/footer';
import App from './Pages/home/App'
import Product from './Components/books/product.js'
import Scroll from './Scroll'

ReactDOM.render(
  <Router>
    <Scroll />
    <Switch>
      <Route exact path='/'>
        <App />
      </Route>
      <Route exact path='/books/:Links' children={<Product />}></Route>
    </Switch>
    <Footer />
  </Router>,
  document.getElementById('root')
)

