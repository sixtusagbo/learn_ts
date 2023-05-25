interface Named {
  readonly name: string;
}

// you can extend multiple interfaces
// Note: not same for classes, you can only inherit from one class
interface Greetable extends Named {
  greet(phrase: string): void;
}

// Can implement more than on interface
class Person implements Greetable {
  name: string;
  age = 21;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = new Person('Joe');
// user1.name = 'Xavi'; //! Error b/c marked as readonly from the interface

user1.greet('Hi there, I am');
