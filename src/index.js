import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import Footer from './Components/footer/footer';
import App from './Pages/home/App'
import About from './Pages/about/About.js'
import Book from './Pages/books/Book';
import Category from './Pages/category/Category';
import Product from './Components/books/product.js'
import Scroll from './Scroll'
import Danielle from './Authors/Danielle-steel/Danielle';
import Hawking from './Authors/Steve-hawkings/Hawking'
import Anne from './Authors/Anne-frank/Anne'
import Finn from './Authors/Aj-finn/Finn'
import Bell from './Authors/Bell-hooks/Bell'
import Camille from './Authors/Camille-pagan/Camille'
import Collen from './Authors/Collen-hoover/Collen'
import Dahl from './Authors/Dahl-roald/Dahl';
import Delia from './Authors/Delia-owens/Delia';
import Disney from './Authors/Disney-book-group/Disney';
import Seuss from './Authors/Dr-seuss/Seuss';
import Elison from './Authors/Elison-ralph/Elison';
import Ackerman from './Authors/Eliot-ackerman/Ackerman';
import Morris from './Authors/Heather-morris/Morris';
import Kershaw from './Authors/Ian-kershaw/Kershaw';
import Holland from './Authors/James-holland/Holland';
import Gaines from './Authors/Joanna-gaines/Gaines'
import Peterson from './Authors/Jordan-b-peterson/Peterson';
import Parla from './Authors/Katie-parla/Parla';
import Wallace from './Authors/Kirk-wallace-johnson/Wallace';
import Fields from './Authors/Kristin-fields/Fields'
import Wingate from './Authors/Lisa-wingate/Wingate';
import Marlon from './Authors/Marlon-james/Marlon';
import Angelou from './Authors/Maya-angelou/Angelou';
import Michelle from './Authors/Michelle-obama/Michelle';
import Namwali from './Authors/Namwali-serpell/Namwali';
import Gregory from './Authors/Paul-r-gregory/Gregory';
import Palacio from './Authors/R-j-palacio/Palacio';
import Sandford from './Authors/Sandford-grace/Sandford';
import Tomi from './Authors/Tomi-adeyemi/Tomi';
import Schwab from './Authors/V-e-schwab/Schwab';
import Walter from './Authors/Walter-isaacson/Walter';
import Action from './Components/Category/Action/Action';
import Biography from './Components/Category/Biography/Biography'
import Romance from './Components/Category/Romance/Romance'
import Adventure from './Components/Category/Adventure/Adventure';
import Science from './Components/Category/Science/Science';
import Kids from './Components/Category/Children/Kids';
import Art from './Components/Category/Art/Art';
import Mystery from './Components/Category/Mystery/Mystery';




ReactDOM.render(
  <Router>
    <Scroll />
    <Switch>
      <Route exact path='/'>
        <App />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/books'>
        <Book />
      </Route>
      <Route exact path='/category'>
        <Category />
      </Route>
      <Route path='/danielle-steel' component={Danielle} />
      <Route path='/stephen-hawking' component={Hawking} />
      <Route path='/anne-frank' component={Anne} />
      <Route path='/a-j-finn' component={Finn} />
      <Route path='/bell-hooks' component={Bell} />
      <Route path='/camille-pagan' component={Camille} />
      <Route path='/colleen-hoover' component={Collen} />
      <Route path='/dahl-roald' component={Dahl} />
      <Route path='/delia-owens' component={Delia} />
      <Route path='/disney-book-group' component={Disney} />
      <Route path='/dr-seuss' component={Seuss} />
      <Route path='/elison-ralph' component={Elison} />
      <Route path='/elliot-ackerman' component={Ackerman} />
      <Route path='/heather-morris' component={Morris} />
      <Route path='/ian-kershaw' component={Kershaw} />
      <Route path='/james-holland' component={Holland} />
      <Route path='/joanna-gaines' component={Gaines} />
      <Route path='/jordan-b-peterson' component={Peterson} />
      <Route path='/katie-parla' component={Parla} />
      <Route path='/kirk-wallace-johnson' component={Wallace} />
      <Route path='/kristin-fields' component={Fields} />
      <Route path='/lisa-wingate' component={Wingate} />
      <Route path='/marlon-james' component={Marlon} />
      <Route path='/maya-angelou' component={Angelou} />
      <Route path='/michelle-obama' component={Michelle} />
      <Route path='/namwali-serpell' component={Namwali} />
      <Route path='/paul-r-gregory' component={Gregory} />
      <Route path='/r-j-palacio' component={Palacio} />
      <Route path='/sandford-grace' component={Sandford} />
      <Route path='/tomi-adeyemi' component={Tomi} />
      <Route path='/V-E-Schwab' component={Schwab} />
      <Route path='/walter-isaacson' component={Walter} />
      <Route path='/action' component={Action} />
      <Route path='/biography' component={Biography} />
      <Route path='/romance' component={Romance} />
      <Route path='/adventure' component={Adventure} />
      <Route path='/science' component={Science} />
      <Route path='/children-book' component={Kids} />
      <Route path='/art' component={Art} />
      <Route path='/mystery' component={Mystery} />
      <Route exact path='/books/:Links' children={<Product />}></Route>
    </Switch>
    <Footer />
  </Router>,
  document.getElementById('root')
)

