/**
 * A Decorator
 *
 * Runs when JS finds your class definition.
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
  return function (_: Function) {
    console.log('Rendering template');
    const hook = document.getElementById(hookId);
    hook!.innerHTML = template;
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

//  -----

/**
 * Executes when the class definition is registered by JS
 * @param target prototype
 * @param propertyName name of the property
 */
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

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

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
