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
