/** @format */

const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randNumb2 = Math.random();

if (randomNumber > 0.7) {
  alert(`Random number ${randomNumber} > 0.7`);
}

let ar = [0, 1, 2, 3, 4];

for (let i = ar.length - 1; i >= 0; --i) {
  console.log(ar[i])
}

for (const val in ar) {
  console.log(val);
}

if ((randomNumber && randNumb2) > 0.7 || (randomNumber || randNumb2) < 0.2) {
  console.log(randNumb2 + ' ' + randomNumber)
  console.log("condition 2")
}