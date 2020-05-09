/********** EXO 1 : Flattening **********/
/***** My Solution *****/
const concatArr = (arr, combine) => {
  let current = [];
  arr.forEach(l => {
    current = combine(current, l);
  });
  return current;
};

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(concatArr(arrays, (a, b) => a.concat(b)));
// → [1, 2, 3, 4, 5, 6]

/********** Book Solution **********/
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));
// → [1, 2, 3, 4, 5, 6]

/***********************************/

/**************** Your own loop *******************/

const loop = (v, test, update, action) => {
  for (v; test(v); v = update(v)) {
    action(v);
  }
};

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

/**** Everything *******/
function every(array, test) {
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 1, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
