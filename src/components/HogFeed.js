import React from 'react'
import HogCard from './HogCard'

class HogFeed extends React.Component {

  render() {
    return (
      <div className="ui grid container">
        {this.props.hogs.map(hog => <HogCard hogObj={hog}/>)}
      </div>
    )
  }
}

export default HogFeed
