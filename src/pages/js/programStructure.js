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

/* Exo 3: Chessboard */
let str = "\n";
for (let i = 0; i < 8; i++, str += "\n") {
  if (i % 2 === 0) str += " ";
  for (let j = 0; j < 8; j++) {
    if (j % 2 != 0) str += "#";
    else str += " ";
  }
}
console.log(str);
