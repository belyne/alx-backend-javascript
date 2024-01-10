// task_1/js/main.ts

// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Allow any additional attributes
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  readonly numberOfReports: number;
}

// Create a Director object
const director1: Directors = {
  firstName: 'John',
  fullTimeEmployee: true,
  lastName: 'Doe',
  location: 'London',
  numberOfReports: 17,
};

console.log(director1);

// Function to print teacher information
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Interface for the printTeacher function
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Example usage
const teacherName: PrintTeacherFunction = printTeacher;
console.log(teacherName("John", "Doe"));
