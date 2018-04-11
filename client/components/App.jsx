import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import HomeNavbar from './HomeNavbar'
import HomeInfo from './HomeInfo'

const App = () => {
  return (
    <Router>
      <div className="app-home">
        <div className="routes">
          <Route exact path='/' component={Home}/>
          <Route exact path='/' component={HomeNavbar}/>
          <Route path='/' component={HomeInfo}/>
        </div>
      </div>
    </Router>
  )
}

export default App
