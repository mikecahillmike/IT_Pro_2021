import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card'


export class CarItem extends React.Component {

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.car.Make}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.car.Poster} width="200" height="200"></img>
                            <footer>
                                {this.props.car.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

