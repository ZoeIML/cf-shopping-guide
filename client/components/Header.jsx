import React from 'react'

import {Link} from 'react-router-dom'

// Change to class component when dynamic

const Header = () => {
  return (
    <div className="header-row">
      <div className="header-links-wrapper">
        <div className="header-links">
          <div className='header-link'>
            <Link to="/citylist">Cities</Link>
          </div>
          <div className='header-link'>
            <Link to="/shoplist">Shops</Link>
          </div>
          <div className="header-link">
            <Link to="/maps">Maps</Link>
          </div>
          <div className="header-link">
            <Link to="/moreinfo">More Info</Link>
          </div>
          <div className="header-link">
            <Link to="/contactus">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header