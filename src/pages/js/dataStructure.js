/* The sum of a range */
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
