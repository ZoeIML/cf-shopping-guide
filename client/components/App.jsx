// React:
import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

// Components:
import Home from './Home'
import HomeInfo from './HomeInfo'
import Header from './Header'
import Footer from './Footer'
import HomeLink from './HomeLink'
import ListCities from './ListCities'
import ListShops from './ListShops'
import ListShopsByProduct from './ListShopsByProduct'
import ListProducts from './ListProducts'
import TheMap from './TheMap'
import MoreInfo from './MoreInfo'
// import ContactUs from '/.ContactUs'
// impost AddCF from './AddCF
// import ListBrands from './ListBrands'
// import ListProductsByType from './ListProductsByType'

// App:
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    this.renderMapTile = this.renderMapTile.bind(this)
  }

  renderMapTile (map) {
    return L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiemltbCIsImEiOiJjamc4bXU1eXczdzNmMnFvNjRubGJob3d6In0.uPZmSpoQ18XOWGmAjsmfGQ'
    }).addTo(map)
  }
  render () {
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
            <Route exact path='/maps' render={() => {
              return <TheMap
                renderMapTile={this.renderMapTile}/>
            }} />

            <Route path='/' component={Footer}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
