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
// Post.findById('5b967dc4ac7425190421ed7c')
//   .then(function(success) {
//     console.log('findById ', success);
//   }, function(error) {
//     console.log('error happend on findById ', error);
//   });

/* UPDATE BY ID. findByIdAndUpdate */
/* DELETE BY ID. findByIdAndDelete */

app.get('/api/posts', function(req, res) {
  Post.find().then(function(success) {
    res.send({posts: success});
  }, function(error) {
    console.log('error happened on find ', error);
  });
});

app.get('/api/posts/:id', function(req, res) {
  var id = req.params.id;

  Post.findById(id)
    .then(function(success) {
      console.log('success ', success);
      res.send(success);
    }, function(error) {
      console.log('error happend on findById ', error);
  });
});

// localhost:3000/api/posts/asdfasfaasd
app.delete('/api/posts/:myid', function(req, res) {
  var id = req.params.myid;

  Post.findByIdAndDelete(id)
    .then(function(success) {
      console.log('success ', success);
    }, function(error) {
      console.log(error);
    });
});

app.post('/api/posts/:id', function(req, res) {
  var author = req.body.author;
  var content = req.body.content;
  var id = req.params.id;

  var updateObject = {
    author: author,
    content: content
  };

  Post.findByIdAndUpdate(id, {$set: updateObject} ,
    {new: true})
    .then(function(success) {
      console.log('udated ', success);
    }, function(error) {
      console.log('error ', error);
    });
});


app.listen(3000);