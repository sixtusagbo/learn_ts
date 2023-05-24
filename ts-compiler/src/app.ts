class Department {
  public name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  describe() {
    console.log('Department: ' + this.name);
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

const computerScience = new Department('Computer Science');
computerScience.addEmployee('Sixtus');
computerScience.addEmployee('Mark');

// computerScience.employees[2] = 'Isaac'; //! Error

computerScience.describe();
computerScience.employeeInfo();
