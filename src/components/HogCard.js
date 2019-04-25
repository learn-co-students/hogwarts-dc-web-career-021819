import React from 'react'
import HogCardFront from './HogCardFront.js'
import HogCardBack from './HogCardBack.js'

class HogCard extends React.Component {
  constructor(){
    super()
    this.state = {
      displayFront: true
    }
  }

  displayHogDetails = (event) => {
    this.setState({displayFront: !(this.state.displayFront)})
  }

  render() {
    let card = this.state.displayFront ? <HogCardFront hogObj={this.props.hogObj} clickEventHandler={this.displayHogDetails}/> : <HogCardBack hogObj={this.props.hogObj} clickEventHandler={this.displayHogDetails}/>
    return (
      <div className="ui eight wide column">
        <div className="ui card">
          { card }
        </div>
      </div>
    )
  }
}

export default HogCard
