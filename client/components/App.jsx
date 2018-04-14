// React:
import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

// Home components:
import Home from './Home'
import HomeInfo from './HomeInfo'

// Consistent components
import Header from './Header'
import Footer from './Footer'
import HomeLink from './HomeLink'

// List components: 
import ListCities from './ListCities'
import ListShops from './ListShops'
import CityList from './CityList'
// import BrandList from './BrandList'
// import ProductList from './ProductList'

// Map components:
// import MapList from './MapList'
// import TheMap from '/.TheMap'

// One-page components:
import MoreInfo from './MoreInfo'
// import ContactUs from '/.ContactUs'
// impost AddCF from './AddCF

// Data:
// PASS DATA AS PROPS!

// App:
const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="routes">
          <Route path='/' component={Home}/>
          <Route path='/' component={Header}/>
          <Route exact path='/' component={HomeInfo}/>
          <Route path='/' component={HomeLink}/>
          <Route path='/moreinfo' component={MoreInfo}/>
          <Route path='/listcities' component={ListCities}/>
          <Route path="/citylist/:name" component={CityList}/>
          <Route path='/listshops' component={ListShops}/>
          <Route path='/' component={Footer}/>
        </div>
      </div>
    </Router>
  )
}

export default App
