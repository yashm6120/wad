const express = require('express');
const http = require('http');
const app = express();

app.use(express.json());

const server = http.createServer(app);
var user = [];

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000,function () {
    console.log('listening on port 3000');
 } );