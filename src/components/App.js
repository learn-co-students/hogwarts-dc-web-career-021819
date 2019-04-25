import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogIndex from "./HogIndex";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
      hogs: hogs,
    };
  }
  getHogs = () => {
    let newHogs = [...this.state.hogs];
    newHogs = newHogs.map(hog => {
      hog.hidden = false;
      this.state.filters.forEach(filt => {
        if (filt.cb(hog)) {
          hog.hidden = true;
          return hog;
        }
      });

      return hog;
    });
    console.log("new filter", newHogs);
    return newHogs;
  };
  removeFilter = filterName => {
    let newFilters = [...this.state.filters];
    newFilters = newFilters.filter(filt => filt.name !== filterName);
    this.setState({ filters: [...newFilters] });
  };
  addFilter = obj => {
    let filts = [...this.state.filters];
    filts = filts.filter(filt => filt.name !== obj.name);
    filts = [...filts, obj];
    this.setState({ filters: filts });
  };
  greasePig = obj => {
    const newHogs = [...this.state.hogs];
    const hog = newHogs.find(h => h.name === obj.name);
    hog.greased = !hog.greased;
    this.setState({ hogs: newHogs });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <HogIndex greasePig={this.greasePig} removeFilter={this.removeFilter} addFilter={this.addFilter} hogs={this.getHogs()} />
      </div>
    );
  }
}

export default App;
