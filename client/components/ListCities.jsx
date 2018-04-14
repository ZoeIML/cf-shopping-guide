import React from 'react'

import {Link} from 'react-router-dom'

import ListProducts from './ListProducts'
import ListBrands from './ListBrands'

const cityData = require('../data/cities.js')

const ListCities = () => {
  return (
    <div className="city-list">
        {cityData.cities.map(city => {
          return (
            <div className="city-options-wrapper" key={city.id}>
              <h2>{city.name}</h2>
              <div className="products-link">
                <Link to={`/${city.name}/products`}>Products</Link>
              </div>
              <div className="brands-link">
                <Link to={`/${city.name}/brands`}>Brands</Link>
              </div>
              <div className="shops-link">
                <Link to={`/${city.name}/shops`}>Shops</Link>
              </div>
            </div>
        )})}
    </div>
  )
}

export default ListCities