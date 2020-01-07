// var express = require('express');
// var app = express();
//
// var fs = require('fs')
// var _ = require('lodash')
// var users = []
//
// fs.readFile('users.json', {encoding: 'utf8'}, function (err, data) {
//   if (err) throw err
//
//   JSON.parse(data).forEach((user) => {
//     user.name.full = _.startCase(user.name.first + ' ' + user.name.last)
//     users.push(user)
//   })
//
// })
//
// app.get('/', (req, res) => {
//   var buffer = ''
// users.forEach((user) => {
//   buffer += '<a href="/' + user.username + '">' + user.name.full + '<br>'
// })
//   res.send(buffer)
// })
//
// app.get('/:username', (req, res) => {
//   var username = req.params.username
//   res.send(username)
// })
//
// var server = app.listen(3000, () => {
//   console.log('Beep Boop, your server is running at localhost' + server.address().port);
// })
