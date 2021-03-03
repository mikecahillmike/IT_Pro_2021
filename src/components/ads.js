import React from 'react';
import { Cars } from './cars';

export class Ads extends React.Component{

    state = {
       cars:[
            {
            "Make": "Audi",
            "Year": "2018",
            "Type": "car",
            "Poster": "https://www.carpixel.net/w/3ee8a89c4d343214c2b5b865e36b448b/audi-a6-sedan-s-line-wallpaper-hd-78191.jpg"
            },
            {
            "Make": "Golf",
            "Year": "2016",
            "Type": "car",
            "Poster": "https://parkers-images.bauersecure.com/Scale/pagefiles/196476/cut-out/450x300/vw_golf_r.jpg"
            },
            {
            "Make": "Mercedes",
            "Year": "2020",
            "Type": "jeep",
            "Poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTImmVDCxro50V4h3teIPXTKjuwYrl5UiCRw&usqp=CAU"
            }
            ]
            
    }

    render(){
        return(
            <div>
                <h1>This is the ads Component</h1>
                <Cars cars={this.state.cars}></Cars>
            </div>
        );
    }

}