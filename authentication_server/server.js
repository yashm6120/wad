// const express = require('express')
// const http = require('http');
// const app = express()

// app.use(express.json());


// const server = http.createServer(app);
// var user = [];

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })


// app.post('/register', function (req, res) {
//     console.log(req.body);
//     var { username, password } = req.body;
//     user.push({"username":username, "password":password});
//     res.send('user registed succefully with username ' + username);
//   })


//   app.post('/login', function (req, res) {
//     console.log(req.body);
//     var { username, password } = req.body;
//     const userInArray = user.find(i => i.username == username);
//     if (!userInArray) {
//         console.log('user not found register to login');
//         res.status(404).send('user not foudn');
//         return;
//     }
//     if (userInArray.password == password) {
//         console.log('user login succefully with username ' + username);
//         res.status(200).send('user login succefully');
//     } else {
//         console.log('invalid credentials');
//         res.status(404).send("invalid credentials");
//     }
//   })

//   app.get('/users', (req,res) => {
//     res.status(200).send(user);
//   })
  

// server.listen(3000, () => {
//     console.log('listneing on 3000');
// })
const express = require('express');
const http = require('http');
const app = express();

app.use(express.json());

const server = http.createServer(app);
var user = [];

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/authen.html');
});

app.post('/register', function (req, res) {
  console.log(req.body);
  var { username, password } = req.body;
  user.push({ "username": username, "password": password });
  res.send('User registered successfully with username ' + username);
});

app.post('/login', function (req, res) {
  console.log(req.body);
  var { username, password } = req.body;
  const userInArray = user.find(i => i.username == username);
  if (!userInArray) {
    console.log('User not found. Register to login.');
    res.status(404).send('User not found');
    return;
  }
  if (userInArray.password == password) {
    console.log('User logged in successfully with username ' + username);
    res.status(200).send('User logged in successfully');
  } else {
    console.log('Invalid credentials');
    res.status(404).send("Invalid credentials");
  }
});

app.get('/users', (req, res) => {
  res.status(200).send(user);
});

server.listen(3000, () => {
  console.log('Listening on 3000');
});
