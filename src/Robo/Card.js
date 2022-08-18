import React, { Component } from "react";

class Card extends Component {

  render ({ id, name, email } = this.props) {
    return (
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${id}?size=200x200`}
          alt={name} title={name} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }

}

export default Card;
