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
    console.log(multiplier); // 1.2    -> Closure : every js function is a closure because it's closer to variable environment (global variable)
    return amount * tax * multiplier;
  }
  return calculateTax;
}

const cVatAmount = createTaxCalculator(0.19);
const cIncomeTaxAmount = createTaxCalculator(0.25);

multiplier = 1.2;

console.log(cVatAmount(200));
console.log(cIncomeTaxAmount(300));

//Closures in practice
let userName = "MAX";

function greetUser() {
  let name = userName;
  console.log("Hi " + name); // Hi Manuel  || The closure concept get the latest value of a global variable
}

userName = "Manuel";
greetUser();

//recursion exemple 1
function powerOf1(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

//recursion exemple 2
function powerOf2(x, n) {
  if (n === 1) {
    return x;
  }
  return x * powerOf2(x, n - 1);
}

//recursion exemple 3
function powerOf3(x, n) {
  return n === 1 ? x : x * powerOf3(x, n - 1);
}

console.log(powerOf1(2, 4));
console.log(powerOf2(2, 4));
console.log(powerOf3(2, 4));

//Advanced recursion
const myself = {
  name: "Max",
  friends: [
    {
      name: "Manuel",
      friends: [
        {
          name: "Chris",
          friends: [
            {
              name: "harry",
            },
            {
              name: "Peter",
            },
          ],
        },
      ],
    },
    {
      name: "Julia",
    },
  ],
};

function printFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...printFriendNames(friend)); // Use a spread operator to push single value instead of nesting an array
  }

  return collectedNames;
}

console.log(printFriendNames(myself));

/**
 * @desc Regular expression section
 * @chapter  344
 * @time 13:21
 */

const regex = new RegExp("\\S+@\\S+\\.\\S+");
