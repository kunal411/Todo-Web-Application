//Included express in my project
const express = require('express');
const path = require('path');

//The web app will run on this port
const port = 8000;

const app = express();
const db = require('./config/mongoose');

//Setting schema of contact_list in model folder
const TodoList = require('./models/works');

app.use(express.urlencoded());

//all the routers are in the folder routes
app.use('/', require('./routes'));

//Used EJS view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//All the static files are in the folder assets
app.use(express.static('assets'));

//To run the server on specified port
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }

    console.log(`Server in running on the port : ${port}`);

})