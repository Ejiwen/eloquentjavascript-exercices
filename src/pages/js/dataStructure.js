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
