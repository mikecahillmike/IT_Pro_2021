const express = require('express');
const app = express();
const port = 3000;
const path = require('path'); 
const bodyParser =require("body-parser");

  //configuration steps
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 
                                                 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to Eire Car Sales') //listen for get request from local host
})

app.get('/Car/:make', (req, res)=>{   // listing for urls 
    console.log(req.params.make);
    res.send('make ' + req.params.make);
})

app.get('/api/cars', (req, res)=>{  //movies method
    const mycars = [
        {
        "Make": "Mercedes",
        "Model": "G",
        "Year": "2018",
        "Poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTImmVDCxro50V4h3teIPXTKjuwYrl5UiCRw&usqp=CAU"
        },
        {
        "Make": "Golf",
        "Model": "R",
        "Year": "2019",
        "Poster": "https://parkers-images.bauersecure.com/Scale/pagefiles/196476/cut-out/450x300/vw_golf_r.jpg"
        }
        ];   
        
    res.json({cars:mymcars}) //send back json data
});

app.get('/test', (req, res)=>{
        res.sendFile(__dirname + '/index.html');    //return file
})

app.get('/car', (req, res)=>{                      // req-request  res-response
    res.send('Make ' + req.query.make + ' '+ req.query.make);
})

app.post('/car', (req, res)=>{
    res.send('Model ' + req.body.model + ' ' + req.body.model); // sending down to be displayed on the browser
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})