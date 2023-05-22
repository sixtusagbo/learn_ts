let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Sixtus';
// userName = userInput; //! Error

if (typeof userInput === 'string') {
  userName = userInput;
}
