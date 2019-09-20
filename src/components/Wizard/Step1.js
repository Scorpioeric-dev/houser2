import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Step1 extends Component {
  state = {
    name: "",
    address: "",
    city: "",
    state: "",
    zip: ""
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
          placeholder="name"
          type="text"
          name="name"
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />
        <input
          placeholder="address"
          type="text"
          name="address"
          value={this.state.address}
          onChange={e => this.handleChange(e)}
        />
        <input
          placeholder="city"
          type="text"
          name="city"
          value={this.state.city}
          onChange={e => this.handleChange(e)}
        />
        <input
          placeholder="state"
          type="text"
          name="state"
          value={this.state.state}
          onChange={e => this.handleChange(e)}
        />
        <input
          placeholder="zip"
          type="text"
          name="zip"
          value={this.state.zip}
          onChange={e => this.handleChange(e)}
        />
        <Link to="/step2">
          <button>next Step</button>
        </Link>
        <H1>Step1</H1>
      </div>
    );
  }
}
