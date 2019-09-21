import React, { Component } from "react";
import House from "./House";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
    this.deleteHouses = this.deleteHouses.bind(this);
  }

  componentDidMount() {
    axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data
      });
      console.log(res.data)
    });
  }

  getHouses() {
      axios.get("/api/houses").then(res => {
          this.setState({
              houses: res.data
            });
        });
  }

  deleteHouses(id) {
    axios.delete(`/api/houses/${id}`).then(res => {
      this.setState({
        houses: res.data
      });
    });
  }
  render() {
    {
      var allData = this.state.houses.map(ele => (
         
          <House   key={ele.id} ele={ele} remove={this.deleteHouses}/>
    
      ));
    }
    return (
      <div>
        <Link to="/Wizard/step1">
          <Button>Add Property</Button>
        </Link>
        {allData}
      </div>
    );
  }
}
const Button = styled.div`
cursor:pointer;
border:solid white;
width:5vw;
border-radius:8px;
background-color:black;
color:white;
display:flex;
margin-left:30vw;`
