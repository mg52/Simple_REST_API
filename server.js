var port = process.env.PORT || 5000;
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var server = app.listen(port);

app.use(bodyParser.json());
app.use(cors());

app.get('/try', function(req,res){
	res.json({'try':'OK'});
});

app.get('/try/:id', function(req,res){
	var theId = req.params.id;
	res.json({'try':theId});
});

console.log('Working!');