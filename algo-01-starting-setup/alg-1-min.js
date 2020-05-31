// Algoryhtm find the minimum value
function getMin(numbers) {
  if (numbers.length === 0) {
    throw new Error("Should not be an empty array!");
  }

  let currentMinimum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < currentMinimum) {
      currentMinimum = numbers[i];
    }
  }

  return currentMinimum;
}

const testArray = [31, 9, 55, 4, 62, 8];

const min = getMin(testArray);

console.log(min); // should be 4
