let mongoose = require('../config/db');

let schema = mongoose.Schema({
  title: String,
  body: String
}, {strict: true});

module.exports = mongoose.model('notes', schema);
