// Code ClickityClick Component Here
import React, { Component } from "react";

export default class ClickityClick extends Component {
  constructor() {
    super();

    this.state = {
      hasBeenClicked: false,
      currentTheme: "blue",
      addressInfo: {
        street: null,
        number: null,
        city: null,
        country: null
      }
    };
  }

  handleClick = () => {
    console.log("before click: ", this.state.hasBeenClicked);
    this.setState({ hasBeenClicked: true }, () =>
      console.log("after click: should be true?", this.state.hasBeenClicked)
    );
  };
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
