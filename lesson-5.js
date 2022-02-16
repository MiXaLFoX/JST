// task 1

function getRandomNums () {
  let randomNums = [];

  for (let i = 0; i < 3; i++) {
    randomNums.push(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
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
