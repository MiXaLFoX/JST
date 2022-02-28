// task 1

function reverseArr(arr) {
  return arr.reverse();
}

console.log(reverseArr([1, 2, 3, 4, 5]));
console.log(reverseArr(['a', 'b', 'c']));
console.log(reverseArr([true, 1, '2', [111]]));

// task 2

function maxNumInArr(arr) {
  return arr.reduce((a, b) => a > b ? a : b);
}

console.log(maxNumInArr([1, 2, 3, 4, 5]));
console.log(maxNumInArr([10, 1, -1, 28, 101]));
console.log(maxNumInArr([-100, -20, -1]));

// task 3

function fibsInArr(n, m) {
  let a = 1;
  let b = 1;
  let arr = [1, 1];
  for (let i = 3; i < n + m; i++) {
    let c = a + b;
    a = b;
    b = c;
    arr = [...arr, c];
  }
  return arr.slice(n-1);
}

console.log(fibsInArr(3, 3));
console.log(fibsInArr(5, 2));
console.log(fibsInArr(2, 10));

// task 4

function qualNums(firstNum, secondNum) {
  let first = String(firstNum);
  let second = String(secondNum);
  let qual = 0;
  let count = 0;
  for (let i = 0; i < first.length; i++) {
    if(first[i] === second[i]){
      count++;
    }
    for(let j = 0; j < second.length; j++){
      if(first[i] === second[j]){
        qual++;
      }
    }
  }
  console.log(qual, count);
}

qualNums(3456, 3557);

// task 5

function sortArrUp(arr) {
  return arr.sort((a, b) => a - b);
}

function sortArrDown(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortArrUp([12, 1, -1, 28, 22]));
console.log(sortArrDown([12, 1, -1, 28, 22]));

// task 6

function uniqueItems(arr) {
  return [...new Set(arr)];
}

console.log(uniqueItems([2, 1, 2, 3, 33, 33]));
console.log(uniqueItems(['a','b', 'a', 'c', 'b']));
