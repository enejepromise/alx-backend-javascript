const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
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
    console.log(`Number of students: ${students.length}`);

    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
