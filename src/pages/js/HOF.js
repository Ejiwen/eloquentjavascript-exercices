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

***********************************