abstract class Department {
  static fiscalYear = 2022;
  // you can avoid this double initialization with TS
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  // shorthand initialization
  constructor(protected readonly id: string, public name: string) {
    console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(): void;

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

  describe(): void {
    console.log(`IT Department - (${this.id})`);
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

  describe(): void {
    console.log('Accounting Department - ID: ' + this.id);
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

const employee1 = Department.createEmployee('Joseph');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('it003', ['Sixtus']);
const accounting = new AccountingDepartment('acc001');

accounting.addReport('New ticket...');
accounting.mostRecentReport = 'Year end report...';
console.log(accounting.mostRecentReport);
accounting.displayReports();
accounting.describe();

accounting.addEmployee('Sixtus');
accounting.addEmployee('Isaac');

console.log(it);
console.log(accounting);
