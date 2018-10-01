var mongoose = require('./../db/mongoose');

const Post = mongoose.model('Post', { // Creating our Post model(table).
  title: String,
  author: String,
  content: String,
  date: {
    type: Date,
    default: Date.now() //setting default, which will take date time on saving
  },
  image: String
});

module.exports = Post;