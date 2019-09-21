import React, { Component } from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <Main>
        <h1>Dashboard</h1>
        <div>
        <Link to="/Wizard/step1">
        <div>
        <Sign>Add Property</Sign>
        </div>
        </Link>
        </div>
      </Main>
    );
  }
}
const Main = styled.div`
  height: 25vh;
  width: 100vw;
  background-color: light green;
  font-family: 'cursive';
  font-size: 90px;
  
 
  align-items: center;
  justify-content: left;
`;
const Button = styled.div`
cursor:pointer;
border:solid white;
width:8vw;
height:4vh;
border-radius:8px;
background-color:black;
color:white;
font-size:15px;
 margin-right:30vw;
 justify-content:space-between;`
 
 const Sign = styled.div`
 font-size:25px;
 margin-right:80vw;
 justify-content:space-between;
 color:black;
 padding:9px;`