import React, {Component} from 'react'

export default class HogCard extends Component {
  render() {
    const hogImgName = this.props.hog.name.toLowerCase().split(' ').join('_')
    return (
      <div className="hogcard pigTile">
        <h2>{this.props.hog.name}</h2>
        <img src={require(`../hog-imgs/${hogImgName}.jpg`)} alt="hog_pic" />
      </div>
    )
  }
}
