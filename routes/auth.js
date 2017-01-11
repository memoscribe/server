const router = require('express').Router();
const passport = require('passport');
const User = require('../models/user');

router.get('/', (req, res) => {
  res.send('ok');
});

router.post('/register', (req, res, next) => {
  User.register(new User({username: req.body.username, email: req.body.email}), req.body.password, (err, user) => {
    if (err) {
      console.log('Error while registering user', err);
      return next(err);
    }
    res.send('registered user! ' + user);
  })
});

router.get('/register/delete', (req, res) => {
  if (req.isAuthenticated()) {
    User.remove({}, (err) => {
      if (err) { throw err; }
      return res.send('deleted users');
    });
  }

  return res.send('not logged in');
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send('logged in');
})

module.exports = router;
