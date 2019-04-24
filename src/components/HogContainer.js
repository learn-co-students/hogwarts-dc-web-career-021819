import React, { Component } from 'react';
import HogCard from './HogCard'
import Filter from './Filter'

class hogContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hogs: [...props.hogs],
      allHogs: [...props.hogs]
    };
  }

  sortByName = (button) => {
    var sortedArray = [...this.state.hogs]
    sortedArray.sort((a, b) => {
      if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return -1
      } else {
        return 1
      }
    })
    this.setState({
      hogs: sortedArray
    })
  }

  toggleGreased = (button) => {
    if (button === "basic") {
      this.setState({
        hogs: this.state.hogs.filter((hog) => {
          return hog.greased === true
        })
      })
    }
    else {
      this.setState({
        hogs: [...this.state.allHogs]
      })
    }
  }

  sortByWeight = (button) => {
    var sortedArray = [...this.state.hogs]
    sortedArray.sort((a, b) => {
      return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    })
    this.setState({
      hogs: sortedArray
    })
  }

  hideHog = (hog) => {
    var updatedHogs = [...this.state.hogs]
    updatedHogs.splice(updatedHogs.indexOf(hog), 1)
    this.setState({
      hogs: updatedHogs,
      allHogs: updatedHogs
    })
  }

  render() {
    return (
      <React.Fragment>
        <Filter sortByWeight={this.sortByWeight} sortByName={this.sortByName} toggleGreased={this.toggleGreased} />
        <br></br>
        <br></br>
        <div className="ui four column grid">{
          this.state.hogs.map((hog, index) => {
            return < HogCard key={hog.name} hog={hog} hideHog={this.hideHog}/>
          })
        }</div>
        </React.Fragment>
    )
  }

}

export default hogContainer;
