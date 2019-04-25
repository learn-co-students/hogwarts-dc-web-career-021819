import React from 'react'

class HogCardBack extends React.Component {
  //
  // name: 'Mudblood',
  // specialty: 'Mediocre magic',
  // greased: false,
  // 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
  // 'highest medal achieved': 'bronze'

  render() {
    let {name, specialty, greased} = this.props.hogObj;

    return (
      <div className="card" onClick={this.props.clickEventHandler}>
        <div className="content">
          <a className="header">
            {name}
          </a>
          <div className="description">
            <p>specialty: {specialty}</p>
            <p>greased: {(greased).toString()}</p>
            <p>weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hogObj['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
            <p>highest medal achieved: {this.props.hogObj['highest medal achieved']}</p>
          </div>
        </div>
        <div className="extra content">
        </div>
      </div>
    )
  }
}

export default HogCardBack
