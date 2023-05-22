const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string] // tuple
} = {
  name: 'Sixtus',
  age: 20,
  hobbies: ['Basketball', 'Music', 'Football'],
  role: [1, 'admin']
}

person.role.push('user'); // push() is an exception
// person.role[1] = 10; // Type 'number' is not assignable to type 'string'
// person.role = [3, 'author', 'something else']; //! ERROR 

let favouriteActivities: any[];
favouriteActivities = ['Sports', 3]

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(person);
