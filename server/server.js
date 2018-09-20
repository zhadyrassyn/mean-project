var express = require('express'); // getting express library. Express helps add routing for our NodeJS application
var bodyParser = require('body-parser'); // getting body-parser library. Body parser helps to barse body in requests
var path = require('path');

var mongoose = require('./db/mongoose');
var postController = require('./controller/postController');

var app = express(); //call express function and save to 'app' variable
app.use(express.static(path.join(__dirname, "../client/public")));


app.use(bodyParser.json()); // use bodyParser.json() function that helps to parse JSON in body requests
app.use('/api', postController);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.listen(3000);