type Combinable = number | string;
type resultDescriptor = 'as-text' | 'as-number';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: resultDescriptor
) {
  let result;
  if (
    typeof input1 === 'number' &&
    typeof input2 === 'number' &&
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(20, 25, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('20', '25', 'as-number');
console.log(combinedAges);

const combinedNames = combine('Joseph', 'Johnson', 'as-text');
console.log(combinedNames);

type User = { name: string; age: number };
const u1: User = { name: 'Sixtus', age: 20 };

console.log(u1);

function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

greet(u1);
isOlder(u1, 23);
