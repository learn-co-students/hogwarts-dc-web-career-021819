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
      hogs: hogs,
      filterGreased: false,
      sortBy: ''
    }
  }

  sortHandler = (event) =>{
    console.log("sorting stuff out, ttyl")
  }

  filterGreased = () =>{
    console.log("we filtering dem hawwwgz")
  }

  render() {
    return (
      <div className="App">
        < Nav />
        < Filter filterGreased={this.state.filterGreased} sortBy={this.state.sortBy} sortHandler={this.sortHandler} filterGreased={this.filterGreased} />
        < HogHolder hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
