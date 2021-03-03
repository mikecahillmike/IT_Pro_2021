import React from 'react';
import { CarItem } from './carItem';

export class Cars extends React.Component {

    render() {
        return this.props.cars.map((car) => {  
            return <CarItem car={car}></CarItem>

        })


    }
}