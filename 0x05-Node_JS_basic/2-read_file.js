// 2-read_file.js

const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
