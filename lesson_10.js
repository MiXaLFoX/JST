// task 1

function getRand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let array = [
  new Promise(resolve => {
    let rand = getRand(1, 5);
    setTimeout(() => {
      resolve(rand);
      console.log(rand);
    }, rand * 1000)
  }),
  new Promise(resolve => {
    let rand = getRand(1, 5);
    setTimeout(
      () => {
        resolve(rand);
        console.log(rand);
      }, rand * 1000)
  }),
  new Promise(resolve => {
    let rand = getRand(1, 5);
    setTimeout(
      () => {
        resolve(rand);
        console.log(rand);
      }, rand * 1000)
  })
];

Promise.all(array).then(
  result => console.log(result[0] + result[1] + result[2])
);

// task 2

let array2 = [
  new Promise(resolve => {
    setTimeout(() => resolve(1), getRand(1, 5) * 1000)
  }),
  new Promise(resolve => {
    setTimeout(() => resolve(2), getRand(1, 5) * 1000)
  }),
  new Promise(resolve => {
    setTimeout(() => resolve(3), getRand(1, 5) * 1000)
  })
];

Promise.race(array2).then(
  result => console.log(result)
);

// task 3

function getNum() {
  return new Promise(resolve =>
    setTimeout(() => resolve(getRand(1, 5)), 3000)
  );
}

async function square() {
  let number = await getNum();
  console.log(number);
  return number;
}

square().then(data => console.log(Math.pow(data, 2)));

// task 4

function getNum1() {
  return new Promise(resolve =>
    setTimeout(() => resolve(getRand(1, 5)), 3000)
  )
}

function getNum2() {
  return new Promise(resolve =>
    setTimeout(() => resolve(getRand(6, 10)), 5000)
  )
}

async function getNumSum() {
  let num1 = await getNum1();
  let num2 = await getNum2();
  console.log(num1);
  console.log(num2);
  return num1 + num2;
}

getNumSum().then(data => console.log(data));
