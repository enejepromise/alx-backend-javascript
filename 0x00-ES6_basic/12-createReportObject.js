export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments: (departmentList) => Object.keys(departmentList).length,
  };
}
