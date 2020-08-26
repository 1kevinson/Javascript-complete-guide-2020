/** @format */

const analyticsData = [
  ['C', 3, 4],
  ['M', 1, 0],
  ['M', 2, 1],
  ['T', 0, 3, 2],
  ['T', 1, 3, 3],
  ['A', 'Lara', 1, 1, 'S', 'AADADAGGA'],
];

// GET ELEMENTS
const rowCards = document.querySelector('.row-cards');
const map = document.querySelector('.map-box');

for (let i = 0; i < +analyticsData[0][1] - 1; i++) {
  var e = document.createElement('div');
  e.classList.add('card-box');
  rowCards.appendChild(e);
}

for (let x = 0; x < +analyticsData[0][2] - 1; x++) {
  var cloneRowCards = rowCards.cloneNode(true);
  map.appendChild(cloneRowCards);
}

// Replace elements in map
analyticsData.map((el) => {
  if (el[0] === 'M') {
    const mountainEl = map.children[el[2]].children[el[1]];
    var cardText = document.createElement('div');

    cardText.innerText = 'M';
    cardText.classList.add('card-text');
    mountainEl.classList.replace('card-box', 'mountain');
    mountainEl.appendChild(cardText);
  }

  if (el[0] === 'T') {
    const treasureEl = map.children[el[2]].children[el[1]];
    var cardText = document.createElement('div');

    cardText.innerText = 'T' + '(' + el[3] + ')';
    cardText.classList.add('card-text');
    treasureEl.classList.replace('card-box', 'treasure');
    treasureEl.appendChild(cardText);
  }

  if (el[0] === 'A') {
    const adventurerEl = map.children[el[3]].children[el[2]];
    var cardText = document.createElement('div');

    cardText.innerText = 'A' + '(' + el[1] + ')';
    cardText.classList.add('card-text');
    adventurerEl.classList.replace('card-box', 'adventurer');
    adventurerEl.appendChild(cardText);
  }
});

/* for (const data of analyticsData) {
  console.log(data);
} */
