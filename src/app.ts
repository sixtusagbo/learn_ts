class Department {
  // you can avoid this double initialization with TS
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  // shorthand initialization
  constructor(private id: string, public name: string) {}

  describe() {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation, etc
    this.employees.push(employee);
  }

  employeeInfo() {
    console.log(`There are ${this.employees.length} employees:`);
    console.log(this.employees);
  }
}

const computerScience = new Department('csc001', 'Computer Science');
computerScience.addEmployee('Sixtus');
computerScience.addEmployee('Mark');

// computerScience.employees[2] = 'Isaac'; //! Error

computerScience.describe();
computerScience.employeeInfo();
