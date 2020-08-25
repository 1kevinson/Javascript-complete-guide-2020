/** @format */

const analyticsData = [
  ['C', 3, 4],
  ['M', 1, 1],
  ['M', 2, 2],
  ['T', 0, 3, 2],
  ['T', 1, 3, 1],
  ['A', 'Lara', 1, 1, 'S', 'AADADAGGA'],
];

// LOGS
console.table(analyticsData);

// GET ELEMENTS
const rowCards = document.getElementById('row-cards');
const cardBox = document.getElementById('card-box');

for (let index = 0; index < analyticsData[0][1]; index++) {
}

console.log(rowCards);
/* for (const data of analyticsData) {
  console.log(data);
} */
