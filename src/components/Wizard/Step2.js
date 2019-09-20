import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Step2 extends Component {
    state ={
        img:''

    }
    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };



    render() {
        return (
            <div>
            <input
            placeholder='img'
            type='text'
            name='img'
            value={this.state.img}
            onChange={e => this.handleChange(e)}
            
            
            />
            <Link to='Step3'>
            <button>Next Step</button>
            </Link>
            <Link to='/step1'>
            <button>Back</button>
            </Link>
             <H1>Step2</H1>   
            </div>
        )
    }
}
