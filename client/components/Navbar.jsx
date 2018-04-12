import React from 'react'

import {Link} from 'react-router-dom'

class Navbar extends React.Component {
  constructor (props) {
    super (props)
    this.state ={
      lists:lists
    }
    this.showLists = this.showLists.bind(this)
    this.showMaps = this.showMaps.bind(this)
  }

  showLists (e) {
   // const lists = e.target.id
    this.setState({
      cities: cities,
      products: products,
      shops: shops,
      brands: brands
    })
  }

  showMaps (e) {

  }


  render () {
    return (
    <div className="navbar">
        <div id ="lists" className="navbar-child" onClick={this.showLists}>
          Lists
        </div>

        <div id ="maps" className="navbar-child" onClick={this.showMaps}>
          Maps
        </div>        
        
        <Link to={'/moreinfo'} id="navinfo" className="navbar-child">More Info</Link> 
        
        <Link to={'/conactus'} id="contactus" className="navbar-child">
          Contact Us
        </Link>
    </div>
    )
  }
}

export default Navbar
