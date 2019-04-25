import React, {Component} from 'react'
class Hog extends Component {

  constructor(props){
    super(props)
    this.state = {
      display: 'hidden'
    }
  }

  showInfo = () => {
    this.setState({display: ''})
  }
  render(){

    return (
      <div className="card" onClick={this.showInfo}>
        <div className="image">
          <img src={require(`../hog-imgs/${this.props.hog.image}.jpg`)} alt="pig"/>
        </div>
        <div className="content">
          <div className="header">{this.props.hog.name}</div>
          <div className="meta">
            <a>{this.props.hog.greased ? "Greased" : "Dry"}</a>
          </div>
          <div className={`description ${this.state.display}`} >
            Weight: {this.props.hog.weight}<br/>
            Highest Medal Achieved: {this.props.hog["highest medal achieved"]}
          </div>
        </div>
      </div>
      )
  }

}
export default Hog
