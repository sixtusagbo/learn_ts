// Explicit and redundant w/ type annotation
const person: {
  name: string;
  age: number;
} = {
  name: 'Sixtus',
  age: 20,
};

// Preferred syntax
// Let TypeScript infer the type
const person2 = {
  name: 'John Doe',
  age: 98,
};

console.log(person.name);
console.log(person2.name);
