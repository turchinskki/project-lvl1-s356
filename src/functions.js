
const minNumber = 1;
const maxNumber = 100;

export const Random = () => (Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber);
export const isEven = num => (num % 2) === 0;
export const Answer = num => (isEven(num) ? 'yes' : 'no');
