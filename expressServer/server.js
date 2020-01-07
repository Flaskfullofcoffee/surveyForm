const express = require('express');
var path = require('path');
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

var app = express();

// view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname, '/public')));

app.get('/', (req, resp) => {
  resp.render('contact.handlebars')
});

app.listen(process.env.PORT || 3000)
