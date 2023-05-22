enum Roles {USER, ADMIN};
enum FileRoles {READ_ONLY = 10, READ_WRITE = 50, WRITE_ONLY = 20};

const person = {
  name: 'Sixtus',
  age: 20,
  hobbies: ['Basketball', 'Music', 'Football'],
  role: Roles.ADMIN
}

if (person.role === Roles.USER) {
  console.log('Welcome to our application, visit docs to learn more!');
} else {
  console.log('Hi administrator!');
}

console.log(person);
