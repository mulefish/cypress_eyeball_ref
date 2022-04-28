//345678901234567890123456789012345678901234567890123456789012345678901234567890
const express = require('express');
const fs = require('fs');
const app = express();
app.get('/', function (req, res) {
  console.log("/");
  res.sendFile('static/index.html', { root: __dirname });
});
app.get('/bundle.js', function (req, res) {
  console.log("/bundle.js");
  res.sendFile('static/bundle.js', { root: __dirname });
});

app.get('/parent.html', function (req, res) {
  console.log("/parent.html");
  res.sendFile('static/parent.html', { root: __dirname });
});


app.get('/iframe.html', function (req, res) {
  console.log("/iframe.html");
  res.sendFile('static/iframe.html', { root: __dirname });
});


const port = 3030 
const server = app.listen(port, function () {
  console.log(`running at localhost:${port}/`);
});
