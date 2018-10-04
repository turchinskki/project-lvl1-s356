import readlineSync from "readline-sync";

const getUserName = () => readlineSync.question("May I have your name? ");
const getUserAnswer = () => readlineSync.question("Your answer: ");
const sayHelloToUser = () =>{
  const name = getUserName();
  console.log(`Hello, ${name}!`);
};
export {sayHelloToUser};
