import React from 'react'

class Search extends React.Component {

  render() {
    return (
      <div className="ui input">
        <input type="text" placeholder="Search..." onChange={this.props.searchBarHandler}/>
      </div>
    )
  }
}

export default Search
