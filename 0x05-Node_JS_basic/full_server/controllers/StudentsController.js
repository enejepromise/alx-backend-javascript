import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const db = process.argv[2];
    readDatabase(db)
      .then((fields) => {
        const sortedEntries = Object.entries(fields)
          .sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
        const reply = [
          'This is the list of our students',
          ...sortedEntries.map(([field, students]) => `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`),
        ].join('\n');
        response.status(200).send(reply);
      })
      .catch((err) => {
        console.error(err);
        response.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'SWE' && major !== 'CS') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const db = process.argv[2];
    readDatabase(db)
      .then((fields) => {
        response.status(200).send(`List: ${fields[major].join(', ')}`);
      })
      .catch((err) => {
        console.error(err);
        response.status(500).send(err.message);
      });
  }
}

