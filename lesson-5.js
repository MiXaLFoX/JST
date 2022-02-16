// task 1

function randomNum (min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNums () {
  let randomNums = [];

  for (let i = 0; i < 3; i++) {
    randomNums.push(randomNum(1, 6));
  }

  return randomNums.reduce((total, cur) => total + cur);
}

let firstPlayerThrow = getRandomNums ();
let secondPlayerThrow = getRandomNums ();

console.log(firstPlayerThrow > secondPlayerThrow ? "First player wins" : "Second player wins");

// task 2

let counter = null;

for (let startDate = new Date("2000-01-01"), now = new Date(); startDate <= now; startDate.setDate(startDate.getDate() + 1)) {
  if (startDate.getDate() === 13 && startDate.getDay() === 5) {
    counter++;
  }
}

console.log(counter);

// task 3

function splitNumber (num, parts) {
  let randNums = [];

  for (let i = 0; i < parts; i++) {
    randNums.push(Math.floor(Math.random() * (num - 1)) + 1);
  }

  let sum = randNums.reduce(
    (total, cur) => total + cur,
    0);

  return sum === num ?
    `the sum of random numbers is equal to the entered number and the numbers are ${randNums}`
    :
    splitNumber(num, parts);
}

console.log(splitNumber(15, 3));
console.log(splitNumber(10, 2));

function splitNumberFloat (num, parts) {
  let randNums = [];

  for (let i = 0; i < parts; i++) {
    randNums.push(Math.floor(((Math.random() * (num - 1)) + 1) * 100) / 100);
  }

  let sum = randNums.reduce(
    (total, cur) => total + cur,
    0);

  return sum === num ?
    `the sum of random numbers is equal to the entered number and the numbers are ${randNums}`
    :
    splitNumberFloat(num, parts);
}

console.log(splitNumberFloat(15, 3));
console.log(splitNumberFloat(10, 2));
