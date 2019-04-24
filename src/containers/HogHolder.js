import React, {Component} from 'react'
import Hog from '../components/Hog'
class HogHolder extends Component {

  render(){
    return (
      <div className="ui grid container">
        <Hog />
        <Hog />
        <Hog />
        <Hog />
      </div>
    )
  }

}
export default HogHolder
