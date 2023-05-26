/**
 * A Decorator
 *
 * Runs when JS finds your class definition.
 * @param constructor function initializer
 */
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger
class Person {
  name = 'Sixtus';

  constructor() {
    console.log('Creating person object...');
  }
}

// const person = new Person();

// console.log(person);
