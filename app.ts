function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-text' | 'as-number'
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
