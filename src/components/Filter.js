import React, {Component} from 'react'
class Filter extends Component {

  render(){
    return (
      <div>
        <button name="byName">Sort by Name</button>
        <button name="byWeight">Sort by Weight</button>
        <button>Filter Greased</button>
      </div>
    )
  }

}
export default Filter
