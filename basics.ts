function displayProfile(name: string, age: number, showAge: boolean) {
  console.log(`My name is ${name}`);
  if (showAge) {
    console.log(`I am ${age} years old.`);
  }
}

const myName = 'Sixtus';
const age = new Date().getFullYear()  - 2003;


displayProfile(myName, age, true);
