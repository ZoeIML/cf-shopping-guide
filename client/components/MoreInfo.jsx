import React from 'react'

import {Link} from 'react-router-dom'

const MoreInfo = () => {
  return (
    <div className="more-info">
      <h1>More Info</h1>
      <h2>Mission Statement</h2>
      <p>
        To provide fast, accurate shopping information to consumers seeking cruelty-free products in New Zealand. 
      </p>
      <h2>Cruelty-Free Sources</h2>
      <p>
        We validate the products listed on our site using the SAFEshopper resource, which can be found <a href="https://www.safe.org.nz/safeshopper-cruelty-free-nz">here</a>
      </p>
      <h2>
        Want in?
      </h2>
      <p>
        If you sell or make cruelty-free products, we would love to hear from you! 
        You can participate and help the project grow by providing feedback through our <Link to="/contactus">contact us</Link> form, or you can submit a product / shop HERE.
      </p>
    </div>
  )
}

export default MoreInfo
