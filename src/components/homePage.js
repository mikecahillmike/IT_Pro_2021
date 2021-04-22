import React from 'react';

export class homePage extends React.Component{

    render(){
        const mystyle = { 
            color: "black",
            backgroundColor: "red",
            padding: "40px",
            fontFamily: "Verdana"
            
          };
          return (
            <div>
            <h1 style={mystyle}>Eire Car Sales</h1>
            <h4>Find your perfect car</h4>
           <br></br>
           <p>Ready to fall in love? You don’t need to wait months to find the perfect match with brand-new cars available to drive away today.</p>
                  <div style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + 'https://m.atcdn.co.uk/ect/media/w1024/e298db098d904528b1325b5fa7e93402.jpg'})`, 
            
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width:'100vw',
            height:'100vh' 
            }}>
                </div>
                </div>
            
          );
        }
      }