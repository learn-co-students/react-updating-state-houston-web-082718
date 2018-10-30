// Code ClickityClick Component Here
import React from "react";

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = () => {
    newClicked = this.state.hasBeenClicked;
    newClicked ? (newClicked = false) : (newClicked = true);
    this.setState({ hasBeenClicked: newClicked });
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

export default ClickityClick;
