import React, { Component } from "react";

class Hello extends Component {

  render() {
    return (
      <div className="f1 tc">
        <h1>{this.props.greeting}</h1>
        <p>Welcome to {this.props.greeting}, of ReactJS</p>
      </div>
    )
  }

}

export default Hello;
