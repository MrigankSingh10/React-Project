import { Component } from "react";

class ClassEvent extends Component {
  handleClick() {
    console.log("Button Clicked ");
  }
  render() {
    return (
      <div>
        THis is a Class Based Component
        <button onClick={this.handleClick}>Click Here </button>
      </div>
    );
  }
}

export default ClassEvent;
