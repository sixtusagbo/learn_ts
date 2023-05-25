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

function add(a: Combinable, b: Combinable) {
  // type guard w/ typeof
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Starts on: ' + emp.startDate);
  }
}

printEmployeeInfo(e1);

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving truck...');
  }

  loadCargo(weight: number) {
    console.log('Loading ' + weight + 'kg cargo...');
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(4.5);
  }
}

useVehicle(v1);
useVehicle(v2);
