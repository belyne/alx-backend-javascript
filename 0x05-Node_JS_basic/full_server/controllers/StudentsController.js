// full_server/controllers/StudentsController.js
import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = await readDatabase('./database.csv');
      const response = 'This is the list of our students\n';
      
      Object.keys(database).sort((a, b) => a.localeCompare(b)).forEach((field) => {
        response += `Number of students in ${field}: ${database[field].length}. List: ${database[field].join(', ')}\n`;
      });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const database = await readDatabase('./database.csv');
      const response = `List: ${database[major].join(', ')}`;

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
