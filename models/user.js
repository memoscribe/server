const mongoose = require.main.require('./config/db');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

let User = new Schema({
  email: String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
