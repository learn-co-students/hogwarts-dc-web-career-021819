import React, {Component} from 'react';
import HogCard from '../components/HogCard'

export default class HogsContainer extends Component {
  modifyHogs = () => {
    if (this.props.sorted === 'sortName'){
        return this.props.hogs.sort((a, b) => {
        if (a.name.toUpperCase() < b.name.toUpperCase()){
          return -1;
        } else if (a.name.toUpperCase() > b.name.toUpperCase()){
          return 1;
        } else {
          return 0;
        }
      })
    } else {
      return this.props.hogs
    }
  }
  render() {
  //   console.log(
  //     this.props
  // )
    // debugger
    return (
      <div className="hogscontainer">
        {this.modifyHogs().map((hog, index)=> <HogCard key={index} hog={hog} />)}
      </div>
    )
  }
}
