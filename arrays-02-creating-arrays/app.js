/** @format */

const numbers = [1, 2, 3];
// console.log(numbers);

const arrayString = Array.from('Kevin');
// console.log(arrayString);

const listItems = document.querySelectorAll('li');
// console.log(listItems);

/* Iterables */
const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

/* Store datas into arrays */
const personalData = [30, 'Max', { moreDetail: [] }];
// console.log(personalData);

const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1],
  [-5.4, 6],
  [31, 2.1],
  [4, 2.1],
  [-5, 2.1],
];

for (const data of analyticsData) {
  // console.log(data);
  for (const datapoint of data) {
    // console.log(datapoint);
  }
}

/* Methods push, pop, unshift */
const hobbies = ['sports', 'cooking'];
hobbies.push('Basketball');
hobbies.unshift('coding');
const poppedValue = hobbies.pop();
hobbies[7] = 'reading';
// console.log(hobbies);

/* Concat array */
const analyticsData3 = [
  [1, 1.6],
  [4, 2],
];
const analyticsData2 = [[1, 6]];
const concArray = analyticsData3.concat(analyticsData2);
// console.log(concArray);

/* forEach method */
const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const tax = 0.17;

/* prices.forEach((price, idx) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  adjustedPrices.push(priceObj);
}); */

/* Map array */
const taxAdjPrices = prices.map((price, idx) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

// console.log(taxAdjPrices);
/* Sort Array */
const sortedArray = prices.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});
console.log(sortedArray);

/* Filter Array */
const filteredArray = prices.filter((price, idx, prices) => {
  return price > 40;
});

console.log(filteredArray);

/* Reduce */
sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
  return prevValue + curValue;
}, 0);

console.log(sum);

