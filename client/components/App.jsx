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
import ListShopsByProduct from './ListShopsByProduct'
// import ListProductsByType from './ListProductsByType'
import ListProducts from './ListProducts'
// import ListBrands from './ListBrands'

// Map components:
// import MapList from './MapList'
// import TheMap from '/.TheMap'

// One-page components:
import MoreInfo from './MoreInfo'
// import ContactUs from '/.ContactUs'
// impost AddCF from './AddCF

// Data:
const brandData = require('../data/brands.js')

// App:
const App = (props) => {
  return (
    <Router>
      <div className="app">
        <div className="routes">
          <Route path='/' component={HomeLink}/>  
          <Route path='/' component={Home}/>
          <Route path='/' component={Header}/>
          <Route exact path='/' component={HomeInfo}/>

          <Route path='/moreinfo' component={MoreInfo}/>

          <Route path='/cities' component={ListCities}/>
          <Route path='/:city/products' component={ListProducts}/>
          <Route path='/:city/shops' component={ListShops}/>
          <Route path="/:city/:product/shops" component={ListShopsByProduct}/>

          {/* <Route path="/product-types" component={ListProductsByType}/> */}

          <Route path='/' component={Footer}/>
        </div>
      </div>
    </Router>
  )
}

export default App
