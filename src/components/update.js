import React from 'react';
import axios from 'axios'; 

export class Update extends React.Component {

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

    componentDidMount(){// Method for getting car id to edit the details of that car
        console.log(this.props.match.params.id); 

        axios.get('http://localhost:4000/api/cars/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
                _id:response.data._id,
                Make:response.data.Make,
                Model:response.data.Model,
                Year:response.data.Year,
                Fuel:response.data.Fuel,
                Reg:response.data.Reg,
                Price:response.data.Price,
                Poster:response.data.poster    
            })
        })
        .catch((error)=>{
            console.log(error); // Catch error and log to the console
        })
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
            Price: e.target.value
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
               
                <form onSubmit={this.onSubmit}>
                    <div className="carMake">
                        <label>Make: </label>
                        <input type="text" placeholder={this.state.make}
                            className="form-control"
                            value={this.state.Make}
                            onChange={this.onChangeCarMake}
                        ></input>
                    </div>
                    <div className="carModel">
                        <label>Model: </label>
                        <input type="text" placeholder={this.state.model}
                            className="form-control"
                            value={this.state.Model}
                            onChange={this.onChangeCarModel}
                        ></input>
                    </div>
                
                    <div className="carYear">
                        <label>Year: </label>
                        <input type="text" placeholder={this.state.year}
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeCarYear}
                        />
                    </div>

                    <div className="carFuel">
                        <label>Fuel: </label>
                        <input type="text" placeholder={this.state.fuel}
                            className="form-control"
                            value={this.state.Fuel}
                            onChange={this.onChangeCarFuel}
                        />
                    </div>

                    <div className="carReg">
                        <label>Reg: </label>
                        <input type="text" placeholder={this.state.reg}
                            className="form-control"
                            value={this.state.Reg}
                            onChange={this.onChangeCarReg}
                        />
                    </div>

                    <div className="carPrice">
                        <label>Price: </label>
                        <input type="text" placeholder={this.state.price}
                            className="form-control"
                            value={this.state.Price}
                            onChange={this.onChangeCarPrice}
                        />
                    </div>
                    <div className="createCar">
                        <input type="submit" value="Update Car" className="btn btn-success" />  
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
