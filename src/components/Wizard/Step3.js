import React, { Component } from "react";

export default class Step3 extends Component {
  state = {
    rentAmount: "",
    mortgage: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          placeholder="rentAmount"
          type="text"
          name="rentAmount"
          value={this.state.rentAmount}
          onChange={e => this.handleChange(e)}
        />
        <input
          placeholder="mortgage"
          type="text"
          name="mortgage"
          value={this.state.mortgage}
          onChange={e => this.handleChange(e)}
        />
        <Button>Complete</Button>
        <h1>Step3</h1>
      </div>
    );
  }
}
