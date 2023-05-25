// const userInput = <HTMLInputElement>document.getElementById('userInput')!; // alternative
const userInput = document.getElementById('userInput') as HTMLInputElement; // I prefer this

userInput.value = 'Hi, there!';
