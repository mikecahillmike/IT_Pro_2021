import React from 'react';
import axios from 'axios';
import './create.css';

export class Create extends React.Component {

    constructor() {// Constructor
        super();

        this.state = { // Car atrubutes
            Name: '',
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
        this.handleCarNameChange = this.handleCarNameChange.bind(this);
        this.handleCarMakeChange = this.handleCarMakeChange.bind(this);
        this.handleCarModelChange = this.handleCarModelChange.bind(this);
        this.handleCarYearChange = this.handleCarYearChange.bind(this);
        this.handleCarFuelChange = this.handleCarFuelChange.bind(this);
        this.handleCarRegChange = this.handleCarRegChange.bind(this);
        this.handleCarPriceChange = this.handleCarPriceChange.bind(this);
        this.handleCarPosterChange = this.handleCarPosterChange.bind(this);
    }

    // Functions to handle saving the input values to the designated variables 
    handleCarNameChange(e) {
        this.setState({ Name: e.target.value });
    }
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
        alert(this.state.Name + "      " + this.state.Price +
        "       " + this.state.Poster);
    e.preventDefault();

        // New Player
        const newCar = {
            name: this.state.Name,
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
            Name: '',
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
                    <h1>Add New Car</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className='playerName'>
                            <label>Car Name</label>
                            <input
                                type='text'
                                className='form-control'
                                value={this.state.Name}
                                onChange={this.handleCarNameChange}
                            ></input>
                        </div>
                        <div className='playerPrice'>
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