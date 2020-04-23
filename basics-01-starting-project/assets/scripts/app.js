/** @format */

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; 

function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Get and write calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

/* Object for log */
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculationResult(calculationType) {
  const enteredNumber = getUserNumberInput();

  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DIVIDE") ||
    enteredNumber === 0
  ) {
    return;
  }

  const initialResult = currentResult;
  let mathOperator;

  if (calculationType == "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType == "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType == "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  } else if (calculationType == "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "x";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculationResult("ADD");
}

function subtract() {
  calculationResult("SUBTRACT");
}

function multiply() {
  calculationResult("MULTIPLY");
}

function divide() {
  calculationResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
