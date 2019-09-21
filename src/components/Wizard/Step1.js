import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, {
  UPDATE_NAME,
  UPDATE_ADDRESS,
  UPDATE_CITY,
  UPDATE_STATE,
  UPDATE_ZIP,

} from "../../store";
import styled from 'styled-components'

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
  
  handleChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
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
        <Section>
        <div>
          <input
            placeholder="name"
            type="text"
            name="name"
            defaultValue={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <input
            placeholder="address"
            type="text"
            name="address"
            defaultValue={this.state.address}
            onChange={e => this.handleChange(e)}
          />
          
          </div>
          <input
          placeholder="city"
          type="text"
          name="city"
          defaultValue={this.state.city}
          onChange={e => this.handleChange(e)}
          />
          
          <input
          placeholder="state"
          type="text"
          name="state"
          defaultValue={this.state.state}
          onChange={e => this.handleChange(e)}
          />
          <input
          placeholder="zip"
          type="text"
          name="zip"
          defaultValue={this.state.zip}
          onChange={e => this.handleChange(e)}
          />
        </Section>
        <Link to="/Wizard/step2">
          <button onClick={() => this.step1()}>next Step</button>
        </Link>
      </div>
    );
  }
}
const Section = styled.div`
border-radius:8px;
color:white;
margin:80px;
`
