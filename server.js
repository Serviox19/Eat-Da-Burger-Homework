var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.NODE_ENV || 3000;

//Use body-parser
app.use(bodyParser.urlencoded({ extended: false }));











app.listen(PORT, function() {
  console.log('App listening on port %s', PORT)
});