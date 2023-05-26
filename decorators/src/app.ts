/**
 * A Decorator
 *
 * Runs when JS finds your class definition.
 * @param constructor function initializer
 */
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger('LOGGING - PERSON')
class Person {
  name = 'Sixtus';

  constructor() {
    console.log('Creating person object...');
  }
}

// const person = new Person();

// console.log(person);
