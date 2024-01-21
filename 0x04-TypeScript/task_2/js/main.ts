// task_2/js/main.ts

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

export const Director = class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
};

export const Teacher = class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
};

export function createEmployee(firstName: string, lastName: string, salary: number | string): DirectorInterface | TeacherInterface {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }

  return new Director();
  };

// Function to check if an employee is a Director
export function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
  return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Example usage
console.log(executeWork(createEmployee(200))); // Output: Getting to work
console.log(executeWork(createEmployee(1000))); // Output: Getting to director tasks

// String literal type named Subjects
type Subjects = 'Math' | 'History';

// Function to teach a class based on the subject
export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    return 'Unknown subject';
  }
}

// Example usage
console.log(teachClass('Math')); // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History

