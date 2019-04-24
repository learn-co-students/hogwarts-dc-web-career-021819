import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aButton: "basic",
      wButton: "basic",
      gButton: "basic"
    };
  }

  aButtonPressed = () => {
    this.state.aButton === "" ? this.setState({aButton: "basic"}) : this.setState({aButton: ""})
    this.props.sortByName(this.state.aButton)
  }

  wButtonPressed = () => {
    this.state.wButton === "" ? this.setState({wButton: "basic"}) : this.setState({wButton: ""})
    this.props.sortByWeight(this.state.wButton)
  }

  gButtonPressed = () => {
    this.state.gButton === "" ? this.setState({gButton: "basic"}) : this.setState({gButton: ""})
    this.props.toggleGreased(this.state.gButton)
  }



  render() {
    return (
      <div className="three ui buttons">
  <button onClick={this.aButtonPressed} className={`ui pink basic button`}>Sort Alphabetically</button>
  <button onClick={this.wButtonPressed} className={`ui pink basic button`}>Heaviest First</button>
  <button onClick={this.gButtonPressed} className={`ui pink ${this.state.gButton} button`}>Greased</button>
</div>
    );
  }

}

export default Filter;
