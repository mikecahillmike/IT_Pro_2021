import React from 'react';
import axios from 'axios';
import './create.css';

export class Create extends React.Component {

   // constructor
   constructor() {
    super();
    this.onChangeCarMake = this.onChangeCarMake.bind(this);  // selected values
    this.onChangeCarModel = this.onChangeCarModel.bind(this);
    this.onChangeCarYear = this.onChangeCarYear.bind(this);
    this.onChangeCarFuel = this.onChangeCarFuel.bind(this);
    this.onChangeCarReg = this.onChangeCarReg.bind(this);
    this.onChangeCarPrice = this.onChangeCarPrice.bind(this);
    this.onChangeCarPoster = this.onChangeCarPoster.bind(this);

    this.onSubmit = this.onSubmit.bind(this); // creates onSubmint when called
    this.state = {
        Make: '',
        Model: '',
        Year: '',
        Fuel: '',
        Reg: '',
        Price: '',
        Poster: ''
    }
}
onChangeCarMake(e) {
    this.setState({
        Make: e.target.value // search input
    });
}
onChangeCarModel(e) {
    this.setState({
        Model: e.target.value
    })

}
onChangeCarYear(e) {
    this.setState({
        Year: e.target.value
    })
}
onChangeCarFuel(e) {
    this.setState({
        Fuel: e.target.value
    })
}
onChangeCarReg(e) {
    this.setState({
        Reg: e.target.value
    })
}
onChangeCarPrice(e) {
    this.setState({
        Prive: e.target.value
    })
}
onChangeCarPoster(e) {
    this.setState({ // class constructor
        Poster: e.target.value
    })
}
onSubmit(e) {
    e.preventDefault();
    alert("Car: " + this.state.Make + " "  // text box for info added
        + this.state.Model + " " +
        this.state.Year + " " +
        this.state.Feul + " " +
        this.state.Reg + " " +
        this.state.Price + " " +
        this.state.Poster);

    const newCar = {
        Make: this.state.Make,
        Model: this.state.Model,
        year: this.state.Year,
        Fuel: this.state.Fuel,
        Reg: this.state.Reg,
        Price: this.state.Price,
        poster: this.state.Poster  // new car details desplayed

    }
    axios.post('http://localhost:4000/api/cars/', newCar)
        .then((res) => {
            console.log(res)

        })
        .catch((err) => {
            console.log(err)
        })
}
render() {
    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h2> Car Details</h2>
                <style>{'body { background-color: grey; }'}</style>
                <form onSubmit={this.onSubmit}>
                    <div className="carMake">
                        <label> Make: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Make}
                            onChange={this.onChangeCarName}
                        />
                    </div>
                    <div className="carModel">
                        <label>Model: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Model}
                            onChange={this.onChangeCarModel}
                        />
                    </div>
                
                    <div className="carYear">
                        <label>Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeCarYear}
                        />
                    </div>

                    <div className="carFuel">
                        <label>Fuel: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Fuel}
                            onChange={this.onChangeCarFuel}
                        />
                    </div>

                    <div className="carReg">
                        <label>Reg: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Reg}
                            onChange={this.onChangeCarReg}
                        />
                    </div>

                    <div className="carPrice">
                        <label>Price: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Price}
                            onChange={this.onChangeCarPrice}
                        />
                    </div>

                    <div className="carPoster">
                        <label>Add Image: </label>
                        <input type="text"
                            className="form-control"  // wraps with proper spacing
                            value={this.state.Poster}
                            onChange={this.onChangeCarPoster} // excutes when select option changes
                        />
                    </div>
                    <div className="createCar">
                        <input type="submit" value="Add Car" className="btn btn-success" />  
                    </div>
                </form>
            </div>
        </div>
    );
}
}