/* Exo 1 */
let str = "#";
for (let i = 0; i < 7; i++, str += "#") {
  console.log(str);
}

/* Exo 2 */
for (let i = 0; i <= 100; i++) {
  let str = "";
  if (i % 3 === 0) str += "Fizz";
  if (i % 5 === 0) str += "Buzz";
  console.log(str || i);
}
