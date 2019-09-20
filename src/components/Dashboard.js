import React, { Component } from 'react'
import House from './House'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state={
            houses:[]
        }
    this.deleteHouses = this.deleteHouses.bind(this)
    }


    componentDidMount(){
        axios.get('/api/houses').then(res=>{
            this.setState({
                houses:res.data
            })
        })
    }


    deleteHouses(id){
        axios.delete(`/api/houses/${id}`).then(res => {
            this.setState({

            houses:res.data
            })
        })
    }
    render() {
        

            let getData = this.state.houses.map(ele => (
                <div key={ele.id}>
                <House ele={ele} remove={this.deleteHouses}/>
                </div>
            ))
        

        return (
            <div>
            <Link to='/step1'>
                <button>Add New Property</button>
            </Link>
               {getData}
            </div>
        )
    }
}
