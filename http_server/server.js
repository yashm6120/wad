const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Send the HTML response
  res.end('<h1>Hello, World!</h1>');
});
const port = 8000;
const hostname = 'localhost';

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
