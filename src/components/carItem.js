import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';   //change url
import Button from 'react-bootstrap/Button'; // delete button
import axios from 'axios';

export class CarItem extends React.Component {

    constructor(){
        super();

        this.DeleteCar = this.DeleteCar.bind(this);  // function when called deletes
    }

    DeleteCar(e){
        e.preventDefault(); //stops multiple deletes
        console.log("Delete: "+this.props.car._id); // log car id to console
        
        axios.delete("http://localhost:4000/api/cars/"+this.props.car._id)
        .then()
      .catch();
    // Reload page when player is deleted
    window.location.reload(true);

    }

    render() {
        return (
            <div>
                 <style>{'body { background-color: red; }'}</style>  
                <Card>
                    <Card.Header>{this.props.car.make}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.car.poster} width="400" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.car.model}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/update"} className="btn btn-success">Update</Link>
               <Button variant="danger" onClick={this.DeleteCar}size="sm">Delete</Button> 
                </Card>

            </div>

        );
    }
}