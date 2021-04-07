import React from 'react';
import { Cars } from './cars';

import axios from 'axios';

export class Ads extends React.Component {

    state = {
        cars: []

    };

    componentDidMount() {
        axios.get('')
            .then(
                (response) => {
                    this.setState({ cars: response.data.Search })
                })
            .catch(
                (error) => {
                    console.log(error)
                });
    }

    render() {
        return (
            <div>
                <h1>This is the ads component.</h1>
                <Cars cars={this.state.cars}></Cars>
            </div>

        );
    }
}