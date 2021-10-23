import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import App from './Pages/home/App'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/'>
        <App />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
)

