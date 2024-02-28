// 3-read_file_async.js

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Attempt to read the database file asynchronously
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the data into lines
      const lines = data.split('\n').filter(line => line.trim() !== '');

      // Extract and count students in each field
      const students = {};
      lines.forEach(line => {
        const [firstName, , , field] = line.split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName.trim());
      });

      // Log the number of students in each field
      console.log(`Number of students: ${lines.length}`);
      Object.entries(students).forEach(([field, names]) => {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;
