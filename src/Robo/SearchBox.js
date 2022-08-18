import React, { Component } from "react";

class SearchBox extends Component {

  render ({ searchKeyValue, searchKeyChange, clearSearch, resultCount } = this.props) {
    return (
      <div className="pa2">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="text"
          placeholder="Search Robots"
          onChange={searchKeyChange}
          value={searchKeyValue}
          />
        <button
          onClick={clearSearch}
          className="f6 link dim ba ph3 pv2 mb2 dib mid-gray"
          >X</button>
        <p>Found {resultCount} robots</p>
      </div>
    )
  }

}

export default SearchBox;
