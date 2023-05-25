type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// w/ interfaces
// interface ElevatedEmployee extends Admin, Employee {}
// OR
// interface ElevatedEmployee =  Admin & Employee;

type ElevatedEmployee = Admin & Employee;

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

const e1: ElevatedEmployee = {
  name: 'Sixtus',
  privileges: ['create-server'],
  startDate: new Date(),
};

console.log(e1);
