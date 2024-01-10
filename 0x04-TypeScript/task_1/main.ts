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

// Create a Teacher object
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Additional attribute
};

console.log(teacher3);


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

// task_1/js/main.ts

// Define the interface for the StudentClass constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Define the interface for the StudentClass instance methods
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass class
class StudentClass implements StudentClass {
  // Properties
  private firstName: string;
  private lastName: string;

  // Constructor
  constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
  }

  // Methods
  workOnHomework(): string {
      return 'Currently working';
  }

  displayName(): string {
      return this.firstName;
  }
}

// Example usage
const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); 
console.log(student.displayName()); 
