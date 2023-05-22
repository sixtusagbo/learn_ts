function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(val: number): void {
  console.log('Result: ' + val);
}

printResult(add(10, 15));

let someValue = undefined;

/**
 * To return `undefined`
 *
 * Though I prefer `void`.
 * By the way, if you don't explixitly define the return as `:undefined`,
 * it'll infer it to be `void`.
 *
 * @returns undefined
 */
function greet(): undefined {
  console.log('Hello World!');
  return;
}

greet();
