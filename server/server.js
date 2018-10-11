var express = require('express'); // getting express library. Express helps add routing for our NodeJS application
var bodyParser = require('body-parser'); // getting body-parser library. Body parser helps to barse body in requests
var path = require('path');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

var mongoose = require('./db/mongoose');
var postController = require('./controller/postController');
const User = require('./model/user');

var app = express(); //call express function and save to 'app' variable
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(session({
  secret: 'ichigo',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false
}));

passport.use(new LocalStrategy(
  {usernameField: 'email'},
  function(email, password, done) {
    User.findOne({email: email}, function(err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, err, {message: 'Incorrect email'});
      }

      user.comparePassword(passport, function(err, isMatch) {
        if (err) {
          return done(err);
        }

        if (!isMatch) {
          return done(null, false);
        }

        done(null, user);
      });
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json()); // use bodyParser.json() function that helps to parse JSON in body requests


app.use('/api', postController);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.listen(3000);