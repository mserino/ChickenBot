var express = require('express');
var app = express();
var url = require('url');
var request = require('request');

var chickenBot = require('./chickenbot.js');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 9001));

app.get('/', function(req, res){
  res.send('It works!');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
