// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;

console.log(add(3, 3));

interface Named {
  readonly name?: string;
  outputName?: string;
}

// you can extend multiple interfaces
// Note: not same for classes, you can only inherit from one class
interface Greetable extends Named {
  greet(phrase: string): void;
}

// Can implement more than on interface
class Person implements Greetable {
  name?: string;
  age = 21;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi, there!');
    }
  }
}

let user1: Greetable;

user1 = new Person();
// user1.name = 'Xavi'; //! Error b/c marked as readonly from the interface

user1.greet('Hi there, I am');
