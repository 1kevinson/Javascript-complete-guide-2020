/** @format */

const sayHello1 = (name) => {
  console.log(`Hi ${name}`);
};

const sayHello2 = (message = 'Hello', name) => {
  console.log(`${message} ${name}`);
};

const sayHello3 = () => {
  console.log(`Hi you !`);
};

const sayHello4 = (message) => {
  return message;
};

function checkInput(cb, ...strings) {
  let hasEmptyString = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyString = true;
      break;
    }
  }

  if (!hasEmptyString) {
    cb();
  }
}

checkInput(
  () => {
    console.log('All not empty...');
  },
  'kevin',
  'jessy',
  'dd',
  'hahaha'
);
