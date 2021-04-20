const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')  
const bodyParser = require("body-parser"); 
const path = require('path'); 
const mongoose = require('mongoose');  

app.use(cors()); 

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())  

const myConnectionString = 'mongodb+srv://admin:mongoDb123@cluster0.ej7e1.mongodb.net/cars?retryWrites=true&w=majority'  // connect to cars database
mongoose.connect(myConnectionString, { useNewUrlParser: true });

const Schema = mongoose.Schema

var carSchema = new Schema({
    make: String,
    model: String,
    year: String,
    fuel: String,
    reg: String,
    price: String,
    poster: String
})

var CarModel = mongoose.model("car", carSchema)

app.get('/api/cars', (req, res) => { 
   
    CarModel.find((err, data) => {
        res.json(data)
    })
    app.get('/api/cars/:id', (req, res) => { 
        console.log(req.params.id);

        CarModel.findById(req.params.id, (err, data) => {
            res.json(data);
        })
    })
})

app.put('/api/cars/:id', (req, res) => {
    console.log("Update car: " + req.params.id)
    console.log(req.body)

    CarModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data)
        })

})

app.delete('/api/cars/:id', (req, res) => {  
    console.log("Delete Ad: " + req.params.id)
    CarModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})

app.post('/api/cars', (req, res) => { 
    console.log('Car Ad Made')
    console.log(req.body.model)
    console.log(req.body.year)
    console.log(req.body.poster)

    CarModel.create({ 
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        fuel: req.body.fuel,
        reg: req.body.reg,
        price: req.body.price,
        poster: req.body.poster
    })

    res.send('Car Listed');
})
app.listen(port, () => {
    console.log(`Car app listening at http://localhost:${port}`)
})  