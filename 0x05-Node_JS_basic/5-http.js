// 5-http.js

const http = require('http');
const countStudents = require('./3-read_file_async');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Check the URL path
  if (req.url === '/') {
    // Display "Hello Holberton School!" for the root path
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    // Display the list of students for the /students path
    countStudents('database.csv')
      .then(() => {
        res.end(); // Response is handled in the countStudents function
      })
      .catch((error) => {
        console.error(error);
        res.end('Internal Server Error\n');
      });
  } else {
    // Handle other paths with a 404 Not Found response
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Export the app variable
module.exports = app;
