import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { HANDLE_CHANGE, UPDATE_IMG } from "../../store";
import styled from 'styled-components'

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
        <Button onClick={this.step2}>Next Step</Button>
        
        </Link>
        <div>
        <Link to="/Wizard/step1">
        <Button onClick={this.step2}>Back</Button>
        </Link>
        </div>
        
      </div>
    );
  }
}

const Button = styled.div`
  cursor: pointer;
  border: solid white;
  width: 8vw;
  height: 4vh;
  border-radius: 8px;
  background-color: black;
  color: white;
  font-size: 15px;
  margin-right: 30vw;
  justify-content: space-between;
`;