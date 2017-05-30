const express = require('express'),
  session = require('express-session'),
  config = require('./config'),
  bodyParser = require('body-parser');


const app = module.exports = express();
app.use(express.static(__dirname + './../dist'));
app.use(bodyParser.json());

const port = 3200;
app.listen(port, function() {
  console.log('Listening on port ', port);
});