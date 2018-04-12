// React:
import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

// Home components:
import Home from './Home'
import HomeInfo from './HomeInfo'

// Consistent components
import Navbar from './Navbar'
import Footer from './Footer'
import HomeLink from './HomeLink'

// List components: 
import CityList from './CityList'
import ShopList from './ShopList'
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
      <div className="app-home">
        <div className="routes">
          <Route exact path='/' component={Home}/>
          <Route exact path='/' component={Navbar}/>
          <Route exact path='/' component={HomeInfo}/>
          <Route path='/' component={HomeLink}/>
          <Route path='/moreinfo' component={MoreInfo}/>
          <Route path='/citylist' component={CityList}/>
          <Route path='/shoplist' component={ShopList}/>
          <Route path='/' component={Footer}/>
        </div>
      </div>
    </Router>
  )
}

export default App
