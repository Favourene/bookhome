import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import Home from './Pages/home/App'
import About from './Pages/about/About.js'
import Book from './Pages/books/Book'
import Category from './Pages/category/Category'
import Product from './Components/books/product.js'
import Scroll from './Scroll'
import Action from './Components/Category/Action/Action'
import Biography from './Components/Category/Biography/Biography'
import Romance from './Components/Category/Romance/Romance'
import Adventure from './Components/Category/Adventure/Adventure'
import Science from './Components/Category/Science/Science'
import Kids from './Components/Category/Children/Kids'
import Art from './Components/Category/Art/Art'
import Mystery from './Components/Category/Mystery/Mystery'
import Events from './Pages/Events/Events'
import Eventdet from './Components/Events/Events-details'
import Contact from './Pages/Contact/Contact'
import Errorss from './Pages/Error/Errorss'
import Cart from './Pages/Cart/Cart'
import Checkout from './Pages/Checkout/Checkout'
import Author from './Authors/Author'

function App() {
  const notify = (type, message) => {
    if (type === 'info') {
      toast.info(message)
    }
    if (type === 'success') {
      toast.success(message)
    }
    if (type === 'warn') {
      toast.warn(message)
    }
    if (type === 'error') {
      toast.error(message)
    }
  }
  return (
    <Router>
      <ToastContainer
        position='top-right'
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Scroll />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/books' component={Book} />
        <Route exact path='/category' component={Category} />
        <Route exact path='/events' component={Events} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/author/:name' component={Author} />
        <Route path='/action' component={Action} />
        <Route path='/biography' component={Biography} />
        <Route path='/romance' component={Romance} />
        <Route path='/adventure' component={Adventure} />
        <Route path='/science' component={Science} />
        <Route path='/children-book' component={Kids} />
        <Route path='/art' component={Art} />
        <Route path='/mystery' component={Mystery} />
        <Route
          exact
          path='/books/:Links'
          children={<Product notify={notify} />}
        ></Route>
        <Route exact path='/events/:Links' children={<Eventdet />}></Route>
        <Route exact path='/cart' children={<Cart />}></Route>
        <Route
          exact
          path='/checkout'
          children={<Checkout notify={notify} />}
        ></Route>
        <Route exact path='*' component={Errorss} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
