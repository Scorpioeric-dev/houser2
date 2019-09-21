import React, { Component } from 'react'
import styled from 'styled-components'

export default class Header extends Component {
    render() {
        return (
            <Main>
                <h1>Villas de Fonseca</h1>
            </Main>
        )
    }
}
const Main = styled.div`
height:25vh;
width:100vw;
background-color:light green;
font-family:'Times New Roman',Times,serif;
font-size:90px;
border: solid black;
display:flex;
align-items:center;
justify-content:center;`
