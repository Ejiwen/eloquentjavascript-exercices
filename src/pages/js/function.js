/* Exo 1: Minimum*/
min = (x, y) => {
  if (x < y) return x;
  else return y;
};

/* Ex0 2 : Recursion */
const isEven = n => {
  if (n < 0) return "numbre is negative";
  if (n == 0) return true;
  if (n == 1) return false;
  if (n > 1) return isEven(n - 2);
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-2));
// → numbre is negative

/* Bean counting */
