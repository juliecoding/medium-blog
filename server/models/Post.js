var mongoose = require('mongoose');

var Post = new mongoose.Schema({
  title: { type: String },
  body: { type: String },
  date: { type: new Date() }
});
