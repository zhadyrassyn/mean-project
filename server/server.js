var mongoose = require('mongoose'); // getting mongoose library. Mongoose helps to work with MongoDB database
var express = require('express'); // getting express library. Express helps add routing for our NodeJS application
var bodyParser = require('body-parser'); // getting body-parser library. Body parser helps to barse body in requests

var app = express(); //call express function and save to 'app' variable

app.use(bodyParser.json()); // use bodyParser.json() function that helps to parse JSON in body requests

mongoose.connect('mongodb://localhost:27017/meanproject'); //connecting to database with port 27017 and meanproject database

app.get('/', function(req, res) { // GET / route. On 'localhost:3000' triggers function that return 'Trigger on url /' message
  res.send('Trigger on url /');
});

const Post = mongoose.model('Post', { // Creating our Post model(table).
  title: String,
  author: String,
  content: String,
  date: {
    type: Date,
    default: Date.now() //setting default, which will take date time on saving
  }
});

/* SAVE NEW ITEM IN DATABSE */
app.put('/posts', function(req, res) { // PUT /posts . Triggers function on PUT 'localhost:3000/posts' url.

  var title = req.body.title; //getting 'title' property from body object
  var content = req.body.content; //getting 'content' property from body object
  var author = req.body.author; //getting 'author' property from body object

  var post = new Post({
    title: title,
    content: content,
    author: author
  });


  post.save(post)
    .then( //handle success case
      function(doc) { // doc stands for Document(row in table)
        res.status(201).send(doc)} // return status '201' and saved doc(object)
    ).catch( //handle error case
      function(e) {
        res.status(400) // return status 400. 400 usually means 'Bad input parameters'
      }
    );

});

/* GET ALL POSTS */
app.get('/posts', function(req, res) { // GET '/posts' url. Triggers function on GET 'localhost:3000/posts' url
  Post.find().then( //finds all items in table 'post'
    function(posts) { // success case function
      res.send({posts: posts}) //return object , where with all posts from table
    }
  ).catch(
    function(e) { // handle error case. e - error
      res.status(400).send(e); //return status 400 and our error
    }
  );
});

/* GET POST BY ID */
app.get('/posts/:id', function(req, res) { // GET '/posts/:id' url. Triggers function on GET 'localhost:3000/posts/someIdValue' url
  var id = req.params.id; //saving our someIdValue to id variable

  Post.findById(id).then(
    function(post) { //handle success case. where 'post' is response value
      res.send({post: post}); // return found post object
    }
  ).catch(
      function(e) { // handle error case
        res.status(400).send(e); //return status 400 and our error as response. 400 means 'Bad input'
      }
  );
});

/* DELETE POST BY ID */
app.delete('/posts/:id', function(req, res) { // DELETE '/posts/:id' url. Triggers function on DELETE 'localhost:3000/posts/someIdValue' url
  var id = req.params.id; //saving our someIdValue to id variable

  Post.findByIdAndRemove(id)
    .then(
      function(doc) { //handle success case. Where 'doc' is our response value from calling 'findByIdAndRemove' function
        res.send(doc); // send deleted post as a response
      }
    )
    .catch(
      function(err) {  //handle fail case. Where 'err' is fail response message
        res.status(404).send() // send status 400 which means 'Not Found' and send nothing as response
      }
    );
});

app.post('/posts/:id', function(req, res) { // POST '/posts/:id' . Trigger function on POST 'localhost:3000/posts/someIdValue' url
  var id = req.params.id; //saving our someIdValue to id variable

  var title = req.body.title; //getting 'title' property from body object
  var content = req.body.content; //getting 'content' property from body object
  var author = req.body.author; //getting 'author' property from body object

  var data = {
    title: title,
    author: author,
    content: content
  };

  Post.findByIdAndUpdate(id, {$set: data}, {new: true}) // {$set: data} means to replace existing object in database to this new 'data' object
    .then(                                              // {new: true} means to return new updated object
      function(doc) { //handle success case , where 'doc' parameter means our new updated object(document)
        res.send(doc); //send updated document object as a response
      }
    ).catch(
      function(err) { //handle error case, where 'err' parameter is our err response message
        res.status(400).send(err); //send status 400 and err message as a response. 400 status means 'Bad input'
      }
    );
});

app.listen(3000);