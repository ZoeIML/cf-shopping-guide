import React from 'react'

import {Link} from 'react-router-dom'

const HomeNavbar = () => {
  return (
    <div className="navbarhome">
      <div className="nav">
        <a href="/lists">Lists</a>
        <a href="/maps">Maps</a>
        <a href="/moreinfo">More Info</a>
      </div>
    </div>
  )
}

export default HomeNavbar
