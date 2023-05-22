function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(val: number): void {
  console.log('Result: ' + val);
}

function addAndHandle(
  n1: number,
  n2: number,
  callback: (result: number) => void
) {
  const result = n1 + n2;
  callback(result);
}

printResult(add(10, 15));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; //! Error
// combineValues = 5; //! Error

printResult(combineValues(7, 3));

addAndHandle(23, 6, res => console.log('[From Callback] Result is ' + res));
