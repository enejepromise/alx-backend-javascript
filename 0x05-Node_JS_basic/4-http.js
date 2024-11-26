const http = require('http');

/**
 * HTTP server that responds with "Hello Holberton School!" to any endpoint.
 * @module 4-http
 */

const handleRequest = (req, res) => {
  // Set the response header to indicate that the response body will be plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response body
  res.end('Hello Holberton School!');
};

// Create a new HTTP server and pass the handleRequest function as the callback
const app = http.createServer(handleRequest);

app.listen(1245);

module.exports = app;
