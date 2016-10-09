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

// error html pages: goes to a page you
// define instead of predefined page
app.use(function(req, res){
  res.type('text/html');
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

var port = 8080;
app.listen(port, function(){
	console.log('ready on port ' + port);
});

