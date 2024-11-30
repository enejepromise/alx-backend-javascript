const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`); // Log HTTP method and URL
  next(); // Pass control to the next middleware/route
});

function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
    }
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const rows = data.split('\n').filter((row) => row.trim() !== '');
      const fields = {};
      const students = rows.slice(1);

      for (const student of students) {
        const keys = student.split(',');
        const field = keys[3].trim();
        if (field in fields) {
          fields[field].push(keys[0]);
        } else {
          fields[field] = [keys[0]];
        }
      }
      resolve({ students, fields });
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const db = process.argv[2];
  countStudents(db)
    .then(({ students, fields }) => {
      const result = [
        'This is the list of our students',
        `Number of students: ${students.length}`,
        ...Object.entries(fields).map(([field, students]) => `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`),
      ].join('\n');
      res.send(result);
    })
    .catch((error) => {
      const reply = `This is the list of our students\n${error.message}`;
      res.send(reply);
    });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
