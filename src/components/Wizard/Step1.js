import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, {
  UPDATE_NAME,
  UPDATE_ADDRESS,
  UPDATE_CITY,
  UPDATE_STATE,
  UPDATE_ZIP,
  HANDLE_CHANGE
} from "../../store";

export default class Step1 extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip
    };
  }
  componentDidMount() {
    const reduxState = store.getState(
      this.setState({
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip
      })
    );
  }
  handleChange = e => {
    store.dispatch({
      type: HANDLE_CHANGE,
      payload: e.target.value
    });
  };

  step1 = () => {
    store.dispatch({
      type: UPDATE_NAME,
      payload: this.state.name
    });
    store.dispatch({
      type: UPDATE_ADDRESS,
      payload: this.state.address
    });
    store.dispatch({
      type: UPDATE_CITY,
      payload: this.state.city
    });
    store.dispatch({
      type: UPDATE_STATE,
      payload: this.state.state
    });
    store.dispatch({
      type: UPDATE_ZIP,
      payload: this.state.zip
    });
  };

  render() {
    return (
      <div>
        <section action="step1">
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
        </section>
        <Link to="/step2">
          <button onClick={() => this.step1()}>next Step</button>
        </Link>
      </div>
    );
  }
}
