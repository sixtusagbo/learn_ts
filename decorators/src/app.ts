/**
 * A Decorator
 *
 * Runs when JavaScript finds your class definition.
 *
 * **Order**: When there are multiple decorators, the creation
 * of decorator functions happens in the other
 * they're specified, just like in regular function calls. But,
 * the execution of the decorator function happens bottom up.
 *
 * @param constructor function initializer
 */
function Logger(logString: string) {
  console.log('Logger Factory');
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log('Template Factory');
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log('Rendering template');
        const hook = document.getElementById(hookId)!;
        hook.innerHTML = template;
        hook.querySelector('h1')!.textContent = this.name;
      }
    };
  };
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Sixtus';

  constructor() {
    console.log('Creating person object...');
  }
}

const person1 = new Person();

console.log(person1);

//  -----

/**
 * When do decorators execute?
 *
 * **NOTE:** Decorators executes when your class is defined. Athough,
 * there are work arounds to modify that default behaviour. Thus,
 * making it advanced so to say.
 *
 * @param target prototype(instance) or constructor(static)
 * @param propertyName name of the property
 */
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method Decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter Decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid Price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const b1 = new Product('Book', 19);
const b2 = new Product('Book 2', 29);
