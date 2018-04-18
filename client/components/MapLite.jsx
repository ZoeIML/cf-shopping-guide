import React from 'react'

// import {Link} from 'react-router-dom'

const MapLite = () => {
  return (
    <div className="map-container">
      <h1>Cruelty Free Map</h1>
      <iframe className="map-lite"
        src="https://www.google.com/maps/d/u/0/embed?mid=1s8rGm1ptvjPUZ-1A_35w64QaUgxzFrZc" width="640" height="480">
      </iframe>
    </div>
  )
}

export default MapLite
