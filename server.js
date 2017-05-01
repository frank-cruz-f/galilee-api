
//node.js API server

var mongoose = require('mongoose');
var express = require('express');
var ratingApi = require('./routes/rating');
var categoryApi = require('./routes/category');
var recipeApi = require('./routes/recipe');
var app = express();

var bodyParser = require('body-parser');

/*var bunyan = require('bunyan');
log = bunyan.createLogger({name: 'cookbook', streams:[{level:'info', path: './logs/errors.log'}]});*/

// parse application/json
app.use(bodyParser.json())

//Fix for cors error
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Config for selecting proper database depending of environment, development by default.
var config = {};
config.mongoURI = {
	development: 'mongodb://frank18cr:79527952a@ds143900.mlab.com:43900/heroku_vpr3tdc1',
	test: 'mongodb://localhost/cookbook-testing'
}

//Mongoose promise plugin
mongoose.Promise = require('bluebird');

//Connecting to mongo using mongoose framework
mongoose.connect(config.mongoURI[app.settings.env], function(err, res) {
  if(err) {
    console.log('Error connecting to the database. ' + err);
  } else {
    console.log('Connected to Database: ' + config.mongoURI[app.settings.env]);
  }
});

//Defining base API paths
app.use('/ratings', ratingApi);
app.use('/categories', categoryApi);
app.use('/recipes', recipeApi);

//Starting the app.
app.set('port', process.env.PORT || 9080);
app.listen(app.get('port'), function () {
  //console.log("server started");
});

module.exports = app;