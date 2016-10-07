/*
	Rudimentary server for trading application
*/

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'node_modules')));
app.use(bodyParser());
app.use(require('./router'));

var port = 8080;
app.listen(port, function(){
	console.log('ready on port ' + port);
});

