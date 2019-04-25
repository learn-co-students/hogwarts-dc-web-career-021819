import React from 'react'

class HogCardFront extends React.Component {
  //
  // name: 'Mudblood',
  // specialty: 'Mediocre magic',
  // greased: false,
  // 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
  // 'highest medal achieved': 'bronze'

  render() {
    let {name, specialty} = this.props.hogObj;
    let hogImage = require(`../hog-imgs/${(name.replace(/ /g, "_")).toLowerCase()}.jpg`);

    return (
      <div className="card" onClick={this.props.clickEventHandler}>
        <div className="image">
          <img src={hogImage} />
        </div>
        <div className="content">
          <a className="header">
            {name}
          </a>
          <div className="description">
            <p>specialty: {specialty}</p>
          </div>
        </div>
        <div className="extra content">
        </div>
      </div>
    )
  }
}

export default HogCardFront
