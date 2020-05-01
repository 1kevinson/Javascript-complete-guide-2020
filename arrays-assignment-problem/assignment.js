/** @format */

const numArray = [10, -2, 6, -4, 60, 58, 39, -6];

// Filter
const filteredNbr = numArray.filter((val) => {
  return val > 5;
});
console.log('Filtered numbers', filteredNbr);

// Map
const MapNbr = numArray.map((number, index, numArray) => {
  const numObj = { num: number, index: index };
  return numObj;
});
console.log('Mapped Objects', MapNbr);

//Reduces
const reducedNbr = numArray.reduce((prevValue, curValue) => {
  return prevValue * curValue;
}, 1);
console.log('Reduce array >> ', reducedNbr);

const findMax = (arrayValues) => {
  let minMax = [];
  const sortedArray = arrayValues.sort((a, b) => {
    if (a > b) {
      return -1;
    } else if (a === b) {
      return 0;
    } else {
      return 1;
    }
  });

  minMax.push(sortedArray[0]);
  minMax.push(sortedArray.reverse()[0]);

  // Destructuring Array
  const [max, min] = minMax;
  return [max, min];
};
console.log('Max Number', findMax(numArray));


//List with no duplicate value
const userIds = new Set();
userIds.add(5);
userIds.add(4);
userIds.add(6);
userIds.add(4);

console.log(userIds);