/*
	Routers for trading application
*/

var express = require('express');
var router = express.Router();
var fs = require('fs');

var posts = JSON.parse(fs.readFileSync('database.json','utf8'));


var single_post = new Post('header','category','text body');
//console.log(single_post.header + ' ' + single_post.category + ' ' + single_post.text_body);
single_post.print();


router.get('/', function(req, res){
	res.render('index', {
		title:'Application',
		items:posts
	});
});

router.post('/add', function(req, res){
	var entry = req.body.entry;
	var description = req.body.desc;
	// this is an inefficient way to get length
	posts[Object.keys(posts).length+1] = [entry, description];
	fs.writeFile('database.json', JSON.stringify(posts), (err) => {
		if(err) throw err;
	});
	res.redirect('/');
});

module.exports = router;

