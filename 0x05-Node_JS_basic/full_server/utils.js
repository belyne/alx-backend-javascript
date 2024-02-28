// full_server/utils.js

const fs = require('fs').promises;

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
      .then(data => {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const students = {};
        lines.forEach(line => {
          const [firstName, , , field] = line.split(',');
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstName.trim());
        });
        resolve(students);
      })
      .catch(error => reject(new Error('Cannot load the database')));
  });
}

module.exports = { readDatabase };
