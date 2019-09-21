import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { HANDLE_CHANGE, UPDATE_IMG } from "../../store";

export default class Step2 extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      img: reduxState.img
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  step2 = () => {
    store.dispatch({
      type: UPDATE_IMG,
      payload: this.state.img
    });
  };

  render() {
    return (
      <div>
        <input
          placeholder="img"
          type="text"
          name="img"
          defaultValue={this.state.img}
          onChange={e => this.handleChange(e)}
        />
        <Link to="/Wizard/step3">
          <button onClick={this.step2}>Next Step</button>
        </Link>
        <Link to="/Wizard/step1">
          <button onClick={this.step2}>Back</button>
        </Link>
      </div>
    );
  }
}
