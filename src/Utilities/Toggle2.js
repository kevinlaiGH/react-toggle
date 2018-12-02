import React, { Component } from "react";

export default class Toggle extends Component {
  state = { on: false };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };
  render() {
    const { renderr } = this.props;
    return (
      <div>
        {renderr({
          on: this.state.on,
          toggle: this.toggle
        })}
      </div>
    );
  }
}
