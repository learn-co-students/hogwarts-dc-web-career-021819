import React from 'react'

class Sort extends React.Component {

  render() {
    return (
      <div>
        <select className="ui dropdown" onChange={this.props.sortHandler}>
          <option value="none">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        <button className="ui button" onClick={this.props.greasedHandler}>Greased</button>
      </div>
    )
  }
}

export default Sort
