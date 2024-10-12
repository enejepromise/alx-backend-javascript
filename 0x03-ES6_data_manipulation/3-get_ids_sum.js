export default function getStudentIdsSum(studentList) {
  return studentList.reduce((total, student) => total + (student.id || 0), 0);
}
