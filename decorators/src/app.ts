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

// const person = new Person();

// console.log(person);
