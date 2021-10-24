import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import App from './Pages/home/App'
import Footer from './Components/footer/footer';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/'>
        <App />
      </Route>
    </Switch>
    <Footer />
  </Router>,
  document.getElementById('root')
)

