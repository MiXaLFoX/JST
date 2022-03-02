// task 1

function execFuncCounter() {
  let count = 1;

  return function() {
    return count++;
  };
}

let counter = execFuncCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// task 2

function getRandNumsArr() {
  let usedNums = [];
  return function addRandNumToArr() {
    let randNum = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    if(!usedNums.includes(randNum)) {
      usedNums.push(randNum)
    }
    if(usedNums.length < 100){
      addRandNumToArr();
    }
    return usedNums;
  };
}

let randNumsArr = getRandNumsArr();
console.log(randNumsArr());

// task 3

function getPositiveNumsRoots(arr) {
  return arr.filter(item => item >= 0).map(Math.sqrt);
}

console.log(getPositiveNumsRoots([1, -2, 3, 0, 4, -5, 6, -11]));

// task 4

function getNumsFormArr(arr) {
  console.log(arr[0]);
  arr.splice(0, 1);
  if (arr.length > 0) {
    getNumsFormArr(arr);
  }
}

getNumsFormArr([1, 2, 3, 4, 5, 6]);

// task 5

function isNumLess(num) {
  let sum = String(num).split('').reduce((acc, cur) => {
    return +acc + +cur;
  });

  return sum > 9 ? isNumLess(sum) : sum;
}

console.log(isNumLess(11));
