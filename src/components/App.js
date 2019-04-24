import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Filter from './Filter'
import HogHolder from '../containers/HogHolder'
import hogs from '../porkers_data';

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: this.optimizeHogs(),
      filterGreased: false,
      sortBy: ''
    }
  }

  optimizeHogs = () =>{
    hogs.forEach(hog =>{
      this.renameWeightKey(hog)
      this.addImageToHog(hog)
      }
    )
    return hogs
  }

  //rename weight key
  renameWeightKey(hog){
    const oldKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    const newKey = 'weight'

    Object.defineProperty(hog, newKey,
      Object.getOwnPropertyDescriptor(hog, oldKey))
    delete hog[oldKey]
  }

  addImageToHog(hog){
    hog.image = hog.name.toLowerCase().replace(/\s/g, '_')
  }

  sortHandler = (event) =>{
    const parameter = event.target.value
    this.sortHogs(parameter)
  }

  compareBy = (parameter) =>{
    return function(a,b){
      const hogA = a[parameter];
      const hogB = b[parameter];

      let comparison = 0;
      if (hogA > hogB) {
        comparison = 1;
      } else if (hogA < hogB) { comparison = -1;
      }
      return comparison;
    }
  }

  sortHogs = (parameter) =>{
    const sortedHogsArray = [...this.state.hogs].sort(this.compareBy(parameter))
    this.setState({
      hogs: sortedHogsArray
    })
  }

  updateGreasedFilter = (event) =>{
    let status = JSON.parse(event.target.value)
    this.setState({
      filterGreased: !status
    })
  }

  render() {
    return (
      <div className="App">
        < Nav />
        < Filter filterGreased={this.state.filterGreased} sortBy={this.state.sortBy} sortHandler={this.sortHandler} onFilterGreased={this.filterGreased} hogsAreFiltered={this.state.updateGreasedFilter}/>
        < HogHolder hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
