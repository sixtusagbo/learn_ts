class Department {
  // you can avoid this double initialization with TS
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  // shorthand initialization
  constructor(private readonly id: string, public name: string) {}

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

class ITDepartment extends Department {
  constructor(id: string, private admins: string[]) {
    super(id, 'IT');
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[] = []) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  displayReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('it003', ['Sixtus']);
const accounting = new AccountingDepartment('acc001');
accounting.addReport('New ticket...');

console.log(it);
console.log(accounting);

const computerScience = new Department('csc001', 'Computer Science');
computerScience.addEmployee('Sixtus');
computerScience.addEmployee('Mark');

// computerScience.employees[2] = 'Isaac'; //! Error

computerScience.describe();
computerScience.employeeInfo();
