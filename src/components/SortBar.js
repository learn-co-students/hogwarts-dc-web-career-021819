import React, {Component} from 'react'

export default class SortBar extends Component {
  render() {
    // console.log(this.props)
    return(
      <div className="navWrapper">
        <button className="filterWrapper" id="sortName" onClick={this.props.changeSortStat}>
          Sort by Name
        </button>
        <button className="filterWrapper" id="sortWeight" onClick={this.props.changeSortStat}>
          Sort by Weight
        </button>
        <button className="filterWrapper" id="filterGreased" onClick={this.props.changeSortStat}>
          Filter by Greased
        </button>
      </div>
    )
  }
}
