<<<<<<< HEAD
=======

>>>>>>> origin/master
var express = require('express');
var consign = require('consign');
//var msg = require('./mod_teste');

var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

<<<<<<< HEAD
module.exports = app;
=======
module.exports = app;l = require('mysql');
>>>>>>> origin/master
