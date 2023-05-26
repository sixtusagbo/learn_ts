function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Sixtus' }, { gender: 'Male' });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = 'Got no value';
  const count = element.length;

  if (count === 1) {
    description = 'Got 1 element';
  } else if (count > 1) {
    description = 'Got ' + count + ' elements';
  }
  return [element, description];
}

console.log(countAndDescribe('Hello World!'));

function extract<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

// console.log(extract({ name: 'Sixtus' }, 'age')); //! Error
console.log(extract({ name: 'Sixtus' }, 'name'));
