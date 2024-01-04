
rt default function createIteratorObject(report) {
	  const departments = Object.values(report.allEmployees);

	  let currentDepartmentIndex = 0;
	  let currentEmployeeIndex = 0;

	  return {
		      next: function () {
			            if (
					            currentDepartmentIndex < departments.length &&
					            currentEmployeeIndex < departments[currentDepartmentIndex].length
					          ) {
					            const employee = departments[currentDepartmentIndex][currentEmployeeIndex];
					            currentEmployeeIndex++;

					            return { value: employee, done: false };
					          } else if (currentDepartmentIndex < departments.length) {
							          const employees = departments[currentDepartmentIndex];
							          currentDepartmentIndex++;
							          currentEmployeeIndex = 0;

							          return { value: employees, done: false };
							        } else {
									        return { done: true };
									      }
			          },
		      [Symbol.iterator]: function () {
			            return this;
			          },
		    };
}
