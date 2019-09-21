import React, { Component } from "react";
import styled from "styled-components";

export default class House extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="body">
        <div className="names">
          <h1>Name:{this.props.ele.name} </h1>
          <h1>Address:{this.props.ele.address}</h1>
          <h1>State:{this.props.ele.state} </h1>
          <h1>City:{this.props.ele.city} </h1>
          <h1>Zip: {this.props.ele.zip}</h1>
          <h1>Rent Amount: {this.props.ele.rent_amount}</h1>
          <h1>Mortgage: {this.props.ele.mortgage}</h1>
          
          </div>
          <div>
          <Img src={this.props.ele.img} alt="" />
          
          <Button onClick={id => this.props.remove(this.props.ele.id)}>
           Delete
          </Button>
          </div>
          </div>
    );
  }
}
const Img = styled.img`
  height: 60vh;
  width: 50vw;
  box-shadow: 8px 8px black;
border:solid black;
    margin: 80px;

  position: relative;
`
const Button = styled.div`

cursor:pointer;
border:solid white;
width:5vw;
border-radius:8px;
background-color:black;
color:white;
cursor:hover;

`
