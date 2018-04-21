import React from 'react'

class TheMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      theMap: []
    }
  }


  componentDidMount () {
    const theMap = L.map('mapid')
      .setView([-36.8, 174.7], 13)
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
