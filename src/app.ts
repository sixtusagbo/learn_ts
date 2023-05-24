const addNumbers = (...numbers: number[]) =>
  numbers.reduce((curResult, curValue) => curResult + curValue, 0);

// With tuples
const addThreeNumbers = (...numbers: [number, number, number]) =>
  numbers.reduce((curResult, curValue) => curResult + curValue, 0);

console.log(addThreeNumbers(3, 4, 5));
console.log(addNumbers(3, 4, 5, 56, 67, 2, 1));
