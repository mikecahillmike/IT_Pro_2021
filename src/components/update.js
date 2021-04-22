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

    componentDidMount(){
        console.log(this.props.match.params.id); 

        axios.get('http://localhost:4000/api/cars/'+this.props.match.params.id) 
        .then(response => {
            this.setState({  // function
                _id:response.data._id,
                Make:response.data.make,
                Model:response.data.model,
                Year:response.data.year,
                Fuel:response.data.fuel,
                Reg:response.data.reg,
                Price:response.data.price,
                Poster:response.data.poster    
            })
        })
        .catch((error)=>{
            console.log(error); 
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
    onSubmit(e) {  // event
        e.preventDefault();
        alert("Car: " + this.state.Make + " "  // text box for info added
            + this.state.Model + " " +
            this.state.Year + " " +
            this.state.Feul + " " +
            this.state.Reg + " " +
            this.state.Price + " " +
            this.state.Poster);
        
        const newCar = {
            make: this.state.Make,
            model: this.state.Model,
            year: this.state.Year,
            fuel: this.state.Fuel,
            reg: this.state.Reg,
            price: this.state.Price,
            poster: this.state.Poster,  // new car details desplayed
            _id: this.state._id  

        }
       axios.put('http://localhost:4000/api/cars/'+this.state._id, newCar)  
       .then(res =>{
           console.log(res.data)
       })
       .catch()
        
    }
    render() {
        return (
            <div className="App">
                <h2>Enter Car Details</h2>
                <style>{'body { background-color: red; }'}</style>  
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Make: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Make}
                            onChange={this.onChangeCarMake}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Model: </label> 
                        <input type="text"
                            className="form-control"
                            value={this.state.Model}
                            onChange={this.onChangeCarModel}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeCarYear}
                        />
                         
                    </div>
                    <div className="form-group">
                        <label>Add Fuel: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Fuel}
                            onChange={this.onChangeCarFuel}
                        />
                         
                    </div>
                    <div className="form-group">
                        <label>Add Reg: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Reg}
                            onChange={this.onChangeCarReg}
                        />
                         
                    </div>
                    <div className="form-group">
                        <label>Add Price: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Price}
                            onChange={this.onChangeCarPrice}
                        />
                         
                         </div>
                         <div className="form-group">
                             <label>Add Picture: </label>
                             <input type="text"
                                 className="form-control"
                                 value={this.state.Poster}
                                 onChange={this.onChangeCarPoster}
                             />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update Ad" className="btn btn-success" /> 
                    </div>
                </form>
            </div>
        );
    }
}