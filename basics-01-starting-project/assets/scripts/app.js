const defaultResult = 0
let currentResult = defaultResult;

currentResult = (currentResult + 10 ) * 3 / 2 - 1;
console.log(`%c This is the result -> ${currentResult}`, "color: #fff; background-color: #6097d0; border-radius: 5px; padding: 5px");

/*  Template literal */
let calculDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`;
let errorMessage = 'An error \n' + 
                   'occured!'


outputResult(currentResult, calculDescription);