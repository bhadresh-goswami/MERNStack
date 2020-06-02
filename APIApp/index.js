//step 4 import express js
const express = require('express');
const path = require('path');
const mongoose = require('./db');
const routes = require('./routes/routes');

const cors = require('cors');
const bodyParser = require('body-parser')
//step 5 create app
const app = express();

//step 7 add public html to application
//this will help you to create the html page for execute our api
app.use(express.static(path.join(__dirname,'public')));
//exeute app you found the blank page in browser



//step 9 use cors and bodyparser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());


//step 8 add routes
app.use(routes);


//step 6 start server
const port = 8080;
app.listen(port,(err)=>{
    if(err)
        console.log(`Error in Program: ${err}`);
    else
        console.log(`Server run at: localhost:${port} `);    
});
