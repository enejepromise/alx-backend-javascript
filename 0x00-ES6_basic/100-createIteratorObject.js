export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).flat();

  return {
    [Symbol.iterator]() {
      let idx = 0;
      return {
        next() {
          if (idx < employees.length) {
            const data = employees[idx];
            idx += 1;
            return { value: data, done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
