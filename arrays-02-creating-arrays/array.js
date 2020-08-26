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
const rowCards = document.querySelector('.row-cards');
const map = document.querySelector('.map-box');

for (let i = 0; i < +analyticsData[0][1] -1; i++) {
  var e = document.createElement('div');
  e.classList.add('card-box');
  rowCards.appendChild(e);
}

for (let x = 0; x < +analyticsData[0][2] - 1; x++) {
  var cloneRowCards = rowCards.cloneNode(true);
    map.appendChild(cloneRowCards);
} 


/* for (const data of analyticsData) {
  console.log(data);
} */
