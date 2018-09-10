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
  title: 'Tenge 381 v obmennikah',
  author: 'Shamil Suvorov',
  content: 'Segodnya bla bla blab bla...'
});

newPost.save().then(function(success) {
  console.log('saved ', success);
}, function(error) {
  console.log('Error on save ', error);
});

app.listen(3000);