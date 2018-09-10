const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost:27017/meanproject');

app.get('/', (req, res) => {
  res.send('Hello, world, 123');
});

const Post = mongoose.model('Post', {
  title: String,
  author: String,
  content: String,
  date: {
    type: Date,
    default: Date.now()
  }
});

const newPost = new Post({
  title: 'Moy vtoroy post',
  author: '123',
  content: 'Segodnya bla bla blab bla...'
});

/* SAVE POST */
// newPost.save().then(function(success) {
//   console.log('saved ', success);
// }, function(error) {
//   console.log('Error on save ', error);
// });


/* GET ALL */
// Post.find().then(function(success) {
//   console.log('success ', success);
// }, function(error) {
//   console.log('error happened on find ', error);
// });

/* GET POST BY ID */
Post.findById('5b967dc4ac7425190421ed7c')
  .then(function(success) {
    console.log('findById ', success);
  }, function(error) {
    console.log('error happend on findById ', error);
  });

app.listen(3000);