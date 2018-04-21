import React from 'react'

class TheMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      theMap: []
    }
  }


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
