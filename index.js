var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Wassup bitches')
})

var server = app.listen(3000, () => {
  console.log('Beep Boop, your server is running at localhost' + server.address().port);
})
