// 6-http_express.js

const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for other paths to handle 404 Not Found
app.use((req, res) => {
  res.status(404).send('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Error</title></head><body><pre>Cannot GET ' + req.url + '</pre></body></html>');
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Express server is listening on port ${PORT}`);
});

// Export the app variable
module.exports = app;
