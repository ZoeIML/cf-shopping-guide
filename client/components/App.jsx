// React:
import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

// Components:
import Home from './Home'
import Navbar from './Navbar'
import HomeInfo from './HomeInfo'
import Footer from './Footer'
import MoreInfo from './MoreInfo'
import CityList from './CityList'
import ShopList from './ShopList'
import HomeLink from './HomeLink'
// import MapList from './MapList'
// import TheMap from '/.TheMap'
//import ContactUs from '/.ContactUs'

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
