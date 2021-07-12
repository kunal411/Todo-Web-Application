const express = require('express');
const path = require('path');
const port = 8000;

const app = express();
const db = require('./config/mongoose');

//Setting schema of contact_list in model folder
const TodoList = require('./models/works');

app.use(express.urlencoded());
app.use('/', require('./routes'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('assets'));


app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }

    console.log(`Server in running on the port : ${port}`);

})