// task 2

const now = new Date();
let counter = null;

for (let startDate = new Date("01/01/2000"); startDate <= now; startDate.setDate(startDate.getDate() + 1)) {
  if (startDate.getDate() === 13 && startDate.getDay() === 5) {
    counter++;
  }
}

console.log(counter);
//console.log(fridaysThirteens.length);
