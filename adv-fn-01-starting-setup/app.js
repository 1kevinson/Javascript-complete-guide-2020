//Pure function will always return the same result
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(2, 6));

// Impure function will always return a different result
function addRandom(num1) {
  return num1 + Math.random();
}
console.log(addRandom(10));

//Side effect is that function which redefine a variable that was define outside the function
let previousResult = 0;
function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}
console.log(addMoreNumbers(2, 3));
