const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser');
const routes = require('./userroutes')

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lidifeng00:q690519126@cluster0.pn5i0.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

routes(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
