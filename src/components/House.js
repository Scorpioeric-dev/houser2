import React, { Component } from 'react'

export default class House extends Component {
    render() {
        console.log(this.props.ele)
        return (
            <div>
            <h1>Name:{this.props.ele.name} </h1>
            <h1>Address:{this.props.ele.address}</h1>
            <h1>State:{this.props.ele.state} </h1>
            <h1>City:{this.props.ele.city} </h1>
            <h1>Zip: {this.props.ele.zip}</h1>
            <h1>Rent Amount: {this.props.ele.rentAmount}</h1>
            <h1>Mortgage: {this.props.ele.mortgage}</h1>
            <img src={this.props.ele.img}/>
            <button onClick={(id) => this.props.remove(this.props.ele.id)}>Delete</button>
             
            </div>
        )
    }
}
