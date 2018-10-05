
import readlineSync from 'readline-sync';
import { Random, Answer } from '../functions';
import { userName } from '../index';

const runEven = () => {
  for (let i = 1; i <= 3; i += 1) {
    const question = Random();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === Answer(question)) {
      console.log('Correct');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${Answer(question)}.\n'Lets try again,${userName}!'`);
      break;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runEven;
