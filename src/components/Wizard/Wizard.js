import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import store,{CANCEL,HANDLE_CHANGE} from "../../store";
import styled from 'styled-components'

export default class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
  }


  handleChange = e => {
    store.dispatch({
      type: HANDLE_CHANGE,
      payload: e.target.value
    });
  };



submit = () =>{
    store.dispatch({
        type:CANCEL
    })
}



  render() {
    return (
      <div>
        <Link to="/">
        <Article>
        Cancel{this.submit}
        </Article>
          
        </Link>
        <Switch>
          <Route path='/Wizard/Step1' component={Step1}/>
          <Route path='/Wizard/Step2' component={Step2}/>
          <Route path='/Wizard/Step3' component={Step3}/>
        </Switch>
      </div>
    );
  }
}

const Button = styled.div`

cursor:pointer;
border:solid white;
width:5vw;
height:4vh;
border-radius:8px;
background-color:black;
color:white;`

const Article = styled.div`
font-family:cursive;
font-size:26px;
color:black;


`
