// create a small HTTP server
const { createServer } = require('http');
const fs = require('fs');

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

const PORT = 1245;
const HOST = '0.0.0.0';

const app = createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    const db = process.argv[2];
    countStudents(db)
      .then(({ students, fields }) => {
        res.write(`Number of students: ${students.length}\n`);
        const result = Object.entries(fields)
          .map(([field, students]) => `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`)
          .join('\n');
        res.write(result);
        res.end();
      })
      .catch((error) => {
        res.write(error.message);
        res.end();
      });
  } else {
    res.end();
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

module.exports = app;
