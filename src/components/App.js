import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import HogFeed from './HogFeed';

class App extends Component {
  constructor() {
    super()

    this.state = {
      hogsArray: hogs,
      filters: {
        type: 'all'
      },
      sort: {
        type: 'none'
      }
    }
  }

  hogSearchHandler = (event) => {
    this.setState({
      hogsArray: (hogs).filter(hog => (hog.name.toLowerCase()).includes((event.target.value).toLowerCase()))
    })
  }

  hogSortHandler = (event) => {
    console.log(event.target.value);
    if(event.target.value === "name"){
      this.setState({
        hogsArray: (this.state.hogsArray).sort( (hog1, hog2) => hog1.name.toLowerCase() < hog2.name.toLowerCase() ? -1 : 1)
      })
    }
    else if(event.target.value === "weight"){
      this.setState({
        hogsArray: (this.state.hogsArray).sort( (hog1, hog2) => hog1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < hog2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] ? -1 : 1)
      })
    }
  }

  hogGreasedHandler = (event) => {
    if(this.state.filters.type === "all"){
      this.setState({
        filters: {type: 'greased'}
      })
      event.target.classList.add("active")
    }
    else{
      this.setState({
        filters: {type: 'all'}
      })
      event.target.classList.remove("active")
    }
  }

  render() {
    let hogsToDisplay = this.state.hogsArray;
    if(this.state.filters.type === "greased"){
      hogsToDisplay = (this.state.hogsArray).filter(hog => hog.greased)
    }

    return (
      <div className="App">
        <Nav searchBarHandler={this.hogSearchHandler} sortHandler={this.hogSortHandler} greasedHandler={this.hogGreasedHandler}/>
        <HogFeed hogs={hogsToDisplay} />
      </div>
    )
  }
}

export default App;
