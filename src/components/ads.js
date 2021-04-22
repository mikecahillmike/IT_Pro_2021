import React from 'react';
import { Cars } from './cars';
import axios from 'axios';  

export class Ads extends React.Component {

    constructor() {
        super(); 

        this.ReloadData = this.ReloadData.bind(this)  
    }
    state = {
        cars: []
    }

    // executes after render
    componentDidMount() {  
        axios.get('http://localhost:4000/api/cars')
            .then(response => {
                this.setState({ cars: response.data });  
            })
            .catch((error) => {
                console.log(error)
            })
    }

    ReloadData() {
        axios.get('http://localhost:4000/api/cars') 
            .then(response => {
                this.setState({ cars: response.data });
            })
            .catch((error) => {
                console.log(error)  
            })

    }

    render() {
        return (
            <div>
                <h1>Eire car sales</h1>
                <Cars cars={this.state.cars} ReloadData={this.ReloadData}></Cars>

            </div>
        );
    }
}