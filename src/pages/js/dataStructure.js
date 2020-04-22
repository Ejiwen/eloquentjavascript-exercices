/************************* The sum of a range *************************/
const range = (start, end) => {
  let rangeTab = [];
  for (let i = start; i <= end; i++) rangeTab.push(i);
  return rangeTab;
};

const sum = range => {
  let result = 0;
  for (let i = 0; i < range.length; i++) result += range[i];
  return result;
};

console.log(sum(range(1, 10)));

const range = (start, end, step = 1) => {
  let rangeTab = [];
  for (let i = start; step < 0 ? i >= end : i <= end; i = step + i)
    rangeTab.push(i);
  return rangeTab;
};

console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

/************************* Reversing an array *************************/
const reverseArray = arr => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) newArr.push(arr[i]);
  return newArr;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
// → ["C", "B", "A"];

/*
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
*/

/***** Book Solution *****/
function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

/******* My Solution *******/
const reverseArrayInPlace = arr => {
  for (let i = 0; i < arr.length / 2; i++) {
    let old = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = old;
  }

  return arr;
};

console.log(reverseArrayInPlace(["A", "B", "C"]));

/********* Implemente a list via an array *********/
