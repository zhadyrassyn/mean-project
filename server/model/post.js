var mongoose = require('./../db/mongoose');

const Post = mongoose.model('Post', { // Creating our Post model(table).
  title: String,
  // author: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  content: String,
  date: {
    type: Date,
    default: Date.now() //setting default, which will take date time on saving
  },
  image: String
});

module.exports = Post;