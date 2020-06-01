// Algorithm find the minimum value first method
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

// Algorithm find the minimum value second method : sorted
function getMin2(numbers) {
  if (numbers.length === 0) {
    throw new Error("Should not be an empty array!");
  }

  for (let i = 0; i < numbers.length; i++) {
    let prevNumber = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      let nextNumber = numbers[j];

      if (prevNumber > nextNumber) {
        //Swap (replacement position)
        numbers[i] = nextNumber;
        numbers[j] = prevNumber;

        console.log(numbers);

        //Updates the positions
        prevNumber = numbers[i];
        nextNumber = numbers[j];
      }
    }
  }

  return numbers[0];
}

const testArray = [31, 9, 55, 4, 62, -6, 8];

const min = getMin2(testArray);

console.log(min); // should be 4
