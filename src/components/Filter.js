import React, {Component} from 'react'
class Filter extends Component {


  render(){
    return (
      <div>
        <button value="name" onClick={this.props.sortHandler}>Sort by Name</button>
        <button value="weight" onClick={this.props.sortHandler}>Sort by Weight</button>
        <button value={this.props.hogsAreFiltered} onClick={this.props.onFilterGreased}>Filter Greased</button>
      </div>
    )
  }
}
export default Filter
