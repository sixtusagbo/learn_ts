class Department {
  // you can avoid this double initialization with TS
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

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
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Invalid value passed in!');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[] = []) {
    super(id, 'Accounting');
    this.lastReport = this.reports[0];
  }

  addEmployee(name: string): void {
    if (name.toLowerCase() === 'sixtus') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  displayReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('it003', ['Sixtus']);
const accounting = new AccountingDepartment('acc001');

accounting.addReport('New ticket...');
accounting.mostRecentReport = 'Year end report...';
console.log(accounting.mostRecentReport);
accounting.displayReports();

accounting.addEmployee('Sixtus');
accounting.addEmployee('Isaac');

console.log(it);
console.log(accounting);

const computerScience = new Department('csc001', 'Computer Science');
computerScience.addEmployee('Sixtus');
computerScience.addEmployee('Mark');

// computerScience.employees[2] = 'Isaac'; //! Error

computerScience.describe();
computerScience.employeeInfo();
