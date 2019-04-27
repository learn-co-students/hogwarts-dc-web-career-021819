import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogsContainer from '../containers/HogsContainer'
import hogs from '../porkers_data';

class App extends Component {
  constructor(){
    super()
    this.state = {
      sorted: "default"
    }
  }

  changeSortStat = (event) => {
    console.log(event)
    this.setState({
      sorted: event.target.id
    })
  }

  render() {
    return (
      <div className="App">
        <Nav changeSortStat={this.changeSortStat}/>
        <HogsContainer hogs={hogs} sorted={this.state.sorted}/>
      </div>
    )
  }
}

export default App;
