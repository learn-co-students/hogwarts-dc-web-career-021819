import React, {Component} from 'react'
import Hog from '../components/Hog'
class HogHolder extends Component {

  renderHogs = () => {
    return this.props.hogs.map(hog => <Hog hog={hog}/>)
  }

  render(){
    return (
      <div className="ui link cards">
        {this.renderHogs()}
      </div>
    )
  }

}
export default HogHolder
