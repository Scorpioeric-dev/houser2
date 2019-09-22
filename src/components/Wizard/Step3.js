import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, {
  UPDATE_RENT_AMOUNT,
  UPDATE_MORTGAGE,
  CANCEL
} from "../../store";
import axios from "axios";
import styled from 'styled-components'

export default class Step3 extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      rent_amount: reduxState.rent_amount,
      mortgage: reduxState.mortgage
    };
  }

 
  getHouses = () => {
    axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data
      });
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  step3 = () => {
    store.dispatch({
      type: UPDATE_RENT_AMOUNT,
      payload: this.state.rent_amount
    });
    store.dispatch({
      type: UPDATE_MORTGAGE,
      payload: this.state.mortgage
    });
    let reduxState = store.getState();
    axios.post("/api/houses", reduxState).then(res => {
      console.log(res);
    });

    store.dispatch({
      type: CANCEL
    });
    this.getHouses();
  };

  goBack = () => {
    store.dispatch({
      type: UPDATE_RENT_AMOUNT,
      payload: this.state.rent_amount
    });
    store.dispatch({
      type: UPDATE_MORTGAGE,
      payload: this.state.mortgage
    });
  };

  render() {
    return (
      <div>
        <input
          placeholder="rentAmount"
          type="text"
          name= 'rent_amount'
          value={this.state.rent_amount}
          onChange={e => this.handleChange(e)}
        />
        <input
          placeholder="mortgage"
          type="text"
          name="mortgage"
          value={this.state.mortgage}
          onChange={e => this.handleChange(e)}
        />
        <Link to="/Wizard/step2">
        <Button onClick={this.goBack}>Back</Button>
        </Link>
        <Link to="/">
        <Button onClick={this.step3}>Complete</Button>
        </Link>
      </div>
    );
  }
}
const Back = styled.div`
font-family:cursive;
font-size:26px;
color:black;
`
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
