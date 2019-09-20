import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

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
  render() {
    return (
      <div>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <Switch>
          <Route />
          <Route />
          <Route />
        </Switch>
      </div>
    );
  }
}
