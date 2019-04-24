import React, { Component } from 'react';

class HogCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreInfo: false
    };
  }
  getHogImage = (hog) => {
    return require("../hog-imgs/" + hog.name.toLowerCase().replace(" ", "_").replace(" ", "_") + ".jpg")
  }

  toggleInfo = () => {
    this.setState({moreInfo: true})
  }

  render() {
    return (
      <div className="column">
        <div className="ui fluid card">
          <div className="image">
            <img src={this.getHogImage(this.props.hog)} alt=""></img>
          </div>
          <div className="content">
            <div className="header">{this.props.hog.name}</div>
          </div>
          <div className="extra content">
            {this.state.moreInfo ?
<div>
<h4 className="ui horizontal divider header">
  <i className="bar chart icon"></i>
  Specifications
</h4>
<table className="ui definition table">
  <tbody>
    <tr>
      <td className="two wide column">Specialty</td>
      <td>{this.props.hog.specialty}</td>
    </tr>
    <tr>
      <td>Weight</td>
      <td>{this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</td>
    </tr>
    <tr>
      <td>Medal</td>
      <td>{this.props.hog['highest medal achieved']}</td>
    </tr>
    <tr>
      <td>Greased</td>
      <td>{this.props.hog.greased ? "Yes" : "Nope"}</td>
    </tr>
  </tbody>
</table>
<br></br>
</div>

              : <button className="ui pink basic button" onClick={this.toggleInfo}>More Info</button>
            }

            <button onClick={()=>this.props.hideHog(this.props.hog)}className="ui pink basic button">Hide</button>
          </div>
        </div>
      </div>
    );
  }

}

export default HogCard
