import React from 'react'

import {Link} from 'react-router-dom'

const citynames = 'names'

const ListCities = () => {
  return (
    <div className="city-list">
      <h2>Cities:</h2>
      <Link to={`/citylist/names`}>Auckland</Link>
      <Link to={`/citylist/names`}>Wellington</Link>
    </div>
  )
}

export default ListCities
