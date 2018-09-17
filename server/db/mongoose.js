var mongoose = require('mongoose'); // getting mongoose library. Mongoose helps to work with MongoDB database

mongoose.connect('mongodb://localhost:27017/meanproject', { useNewUrlParser: true }); //connecting to database with port 27017 and meanproject database
console.log('connected to db');

module.exports = mongoose;