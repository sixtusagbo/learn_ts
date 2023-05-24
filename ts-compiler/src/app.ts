class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe() {
    console.log('Department: ' + this.name);
  }
}

const computerScience = new Department('Computer Science');

console.log(computerScience.describe());
