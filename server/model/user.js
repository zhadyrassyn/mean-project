const bcrypt = require('bcrypt');
const mongoose = require('./../db/mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: String,
  firstName: String,
  lastName: String,
  registeredDate: {
    type: Date,
    default: new Date()
  }
});

userSchema.pre('save', function(next) {
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {

    if (err) {
      next(err);
    }

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
        next(err);
      } else {
        user.password = hash;
        next();
      }
    });
  });
});

userSchema.methods.comparePassword = function(passwordToCompare, callback) {
  bcrypt.compare(passwordToCompare, this.password, function(err, res) {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};

const User = mongoose.model('user', userSchema);

module.exports = User;