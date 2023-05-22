const person = {
  name: 'Sixtus',
  age: 20,
  hobbies: ['Basketball', 'Music', 'Football']
}

let favouriteActivities: any[];
favouriteActivities = ['Sports', 3]

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}