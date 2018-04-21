import React from 'react'

class TheMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      theMap: []
    }
    // this.renderMapTile = this.renderMapTile.bind(this)
  }

  // renderMapTile (map) {
  //   return L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  //     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  //     maxZoom: 18,
  //     id: 'mapbox.streets',
  //     accessToken: 'pk.eyJ1IjoiemltbCIsImEiOiJjamc4bXU1eXczdzNmMnFvNjRubGJob3d6In0.uPZmSpoQ18XOWGmAjsmfGQ'
  // }).addTo(this.state.theMap)
  // }


  componentDidMount () {
    const theMap = L.map('mapid', 
      {center: [51.505, -0.09],
        zoom: 13})
      .setView([51.505, -0.09], 13)
      this.props.renderMapTile(theMap)
    this.setState({
      theMap: theMap
    })
  }

  render () {
    return (
      <div className='map-container'>
        <div id='mapid'>
        </div>
      </div>
    )
  }
}


export default TheMap
