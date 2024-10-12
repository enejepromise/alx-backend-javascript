interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	workFromHome() {
		return 'Working from home';
	}

	getCoffeeBreak() {
		return 'Getting a coffee break';
	}

	workDirectorTasks() {
		return 'Getting to director tasks';
	}
}


class Teacher implements TeacherInterface {
	workFromHome() {
		return 'Cannot work from home';
	}

	getCoffeeBreak() {
		return 'Cannot have a break';
	}

	workTeacherTasks() {
		return 'Getting to work';
	}
}

function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher;
	}
	return new Director;
}

function isDirector(employee: Director | Teacher): employee is Director {
	return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): string {
	if (isDirector(employee)) {
		console.log(employee.workDirectorTasks());
		return employee.workDirectorTasks();
	}
	console.log(employee.workTeacherTasks());
	return employee.workTeacherTasks();
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
	console.log(`Teaching ${todayClass}`);
	return `Teaching ${todayClass}`;
}

const dir: Director = new Director;
const lec: Teacher = new Teacher;

console.log(dir.workFromHome(), dir.getCoffeeBreak(), dir.workDirectorTasks())
console.log(lec.workFromHome(), lec.getCoffeeBreak(), lec.workTeacherTasks())
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

teachClass('Math');
teachClass('History');
