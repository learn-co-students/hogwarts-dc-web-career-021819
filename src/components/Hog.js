import React, {Component} from 'react'
class Hog extends Component {


  getImageURL(){
    `${this.props.hog.image}`
  }
  render(){

    return (
      <div className="card">
        <div className="image">
          <img src={require(`../hog-imgs/${this.props.hog.image}.jpg`)} alt="pig"/>
        </div>
        <div className="content">
          <div className="header">{this.props.hog.name}</div>
          <div className="meta">
            <a>{this.props.hog.greased}</a>
          </div>
          <div className="description">
            Matthew is an interior designer living in New York.
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            Joined in 2013
          </span>
          <span>
            <i className="user icon"></i>
            75 Friends
          </span>
        </div>
      </div>
      )
  }

}
export default Hog
