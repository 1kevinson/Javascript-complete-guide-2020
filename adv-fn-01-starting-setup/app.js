//Pure function will always return the same result (more pure functions)
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(2, 6));

// Impure function will always return a different result (less impure functions)
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

//Factory functions (use a function inside a function)
let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multiplier); // 1.2    -> Closure : every js function is a closure because it's closer to variable environnement (global variable)
    return amount * tax * multiplier;
  }
  return calculateTax;
}

const cVatAmount = createTaxCalculator(0.19);
const cIncomeTaxAmount = createTaxCalculator(0.25);

multiplier = 1.2;

console.log(cVatAmount(200));
console.log(cIncomeTaxAmount(300));
