const http = require('http');

const hostname = 'localhost';
const port = process.env.PORT || port;

const server = http.createServer((req, res) => {
  res.statusCode = 200; 
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => { 
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log("aaa:" + port);
  console.log("host:" + hostname);
});