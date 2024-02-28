// full_server/controllers/StudentsController.js

const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(req.app.locals.databasePath);
      res.status(200).send(`This is the list of our students\n${formatStudents(students)}`);
    } catch (error) {
      console.error(error);
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major.toUpperCase();
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(req.app.locals.databasePath);
      const majorStudents = students[major] || [];
      res.status(200).send(`List: ${majorStudents.join(', ')}`);
    } catch (error) {
      console.error(error);
      res.status(500).send('Cannot load the database');
    }
  }
}

function formatStudents(students) {
  const result = [];
  Object.entries(students).sort((a, b) => a[0].localeCompare(b[0])).forEach(([field, names]) => {
    result.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  });
  return result.join('\n');
}

module.exports = StudentsController;
