// React:
import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

// Components:
import Home from './Home'
import HomeNavbar from './HomeNavbar'
import HomeInfo from './HomeInfo'
import Footer from './Footer'
// import MoreInfo from './MoreInfo'
// import CityList from './CityList'
// import ShopList from './ShopList'
// import MapList from './MapList'
// import TheMap from '/.TheMap'

// App:
const App = () => {
  return (
    <Router>
      <div className="app-home">
        <div className="routes">
          <Route exact path='/' component={Home}/>
          <Route exact path='/' component={HomeNavbar}/>
          <Route path='/' component={HomeInfo}/>
          <Route path='/' component={Footer}/>
        </div>
      </div>
    </Router>
  )
}

export default App
