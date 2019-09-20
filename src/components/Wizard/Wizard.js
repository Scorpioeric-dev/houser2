import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import store,{CANCEL,HANDLE_CHANGE} from "../../store";

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
          <button onClick={this.submit}>Cancel</button>
        </Link>
        <Switch>
          <Route path='/Step1' component={Step1}/>
          <Route path='/Step2' component={Step2}/>
          <Route path='/Step3' component={Step3}/>
        </Switch>
      </div>
    );
  }
}
