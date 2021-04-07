import React from 'react';
import axios from 'axios';
import './create.css';

export class Create extends React.Component {

    constructor() {// Constructor
        super();

        this.state = { // Car atrubutes
            Make: '',
            Model: '',
            Year: '',
            Fuel: '',
            Reg: '',
            Price: '',
            Poster: ''
        }
        // Methods
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCarMakeChange = this.handleCarMakeChange.bind(this);
        this.handleCarModelChange = this.handleCarModelChange.bind(this);
        this.handleCarYearChange = this.handleCarYearChange.bind(this);
        this.handleCarFuelChange = this.handleCarFuelChange.bind(this);
        this.handleCarRegChange = this.handleCarRegChange.bind(this);
        this.handleCarPriceChange = this.handleCarPriceChange.bind(this);
        this.handleCarPosterChange = this.handleCarPosterChange.bind(this);
    }

    // Functions to handle saving the input values to the designated variables 
    handleCarMakeChange(e) {
        this.setState({ Name: e.target.value });
    }
    handleCarModelChange(e) {
        this.setState({ Price: e.target.value });
    }
    handleCarYearChange(e) {
        this.setState({ Price: e.target.value });
    }
    handleCarFuelChange(e) {
        this.setState({ Price: e.target.value });
    }
    handleCarRegChange(e) {
        this.setState({ Price: e.target.value });
    }
    handleCarPriceChange(e) {
        this.setState({ Price: e.target.value });
    }

    handleCarPosterChange(e) {
        this.setState({ Poster: e.target.value });
    }
    // Method for handling the submit request
    handleSubmit(e) {
        alert(this.state.Make + " added to list of cars for Sale\n" + this.state.Reg );
    e.preventDefault();

        // New Car
        const newCar = {
            make: this.state.Make,
            model: this.state.Model,
            year: this.state.Year,
            fuel: this.state.Fuel,
            reg: this.state.Reg,
            price: this.state.Price,
            poster: this.state.Poster
        };
        // New Car posted to the link
        axios.post('http://localhost:4000/api/cars/', newCar)
            .then()
            .catch();

        // setting the state
        this.setState({
            Make: '',
            Model: '',
            Year: '',
            Fuel: '',
            Reg: '',
            Price: '',
            Poster: ''
        });
    }
    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Car Details</h1>
                    <form onSubmit={this.handleSubmit}>

                        <div className='carMake'>
                            <label>Make</label>
                            <input
                                type='text'
                                className='form-control'
                                value={this.state.Make}
                                onChange={this.handleCarMakeChange}
                            ></input>
                        </div>

                        <div className='carModel'>
                            <label>Model</label>
                            <input
                                type='text'
                                className='form-control'
                                value={this.state.Model}
                                onChange={this.handleCarMakeChange}
                            ></input>
                        </div>

                        <div className='carYear'>
                            <label>Year</label>
                            <input
                                type='text'
                                className='form-control'
                                value={this.state.Year}
                                onChange={this.handleCarYearChange}
                            ></input>
                        </div>

                        <div className='carReg'>
                            <label>Reg</label>
                            <input
                                type='text'
                                className='form-control'
                                value={this.state.Reg}
                                onChange={this.handleCarRegChange}
                            ></input>
                        </div>

                        <div className='carFuel'>
                            <label>Fuel Type</label>
                            <input
                                type='text'
                                className='form-control'
                                value={this.state.Fuel}
                                onChange={this.handleCarFuelChange}
                            ></input>
                        </div>

                        <div className='carPrice'>
                            <label>Car Price</label>
                            <input
                                type='text'
                                className='form-control'
                                value={this.state.Price}
                                onChange={this.handleCarPriceChange}
                            ></input>
                        </div>
                        <div className='carPoster'>
                            <label>Car Poster Url</label>
                            <textarea
                                row='3'
                                className='form-control'
                                value={this.state.Poster}
                                onChange={this.handleCarPosterChange}
                            ></textarea>
                        </div>
                        <div className='createCar'>
                            <button type="submit">Add Car</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}