import React from 'react'

import {Link} from 'react-router-dom'

const citynames = 'names'

const ListCities = () => {
  return (
    <div className="city-list">
      <h1>Cities:</h1>
      <Link to={`/citylist/names`}>Auckland</Link>
      <Link to={`/citylist/names`}>Wellington</Link>
    </div>
  )
}

export default ListCities
