const button = document.querySelector("button");
const output = document.querySelector("p");

// Setup a promise
const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("It's done !");
    }, duration);
  });

  return promise;
};

//Create a promise for getting position
const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });

  return promise;
};

function trackUserHandler() {
  let posData;

  getPosition()
    .then(
      (positionData) => {
        posData = positionData;
        return setTimer(1500);
      },
      (error) => {
        console.log(error);
        return "on we go...";
      }
    )
    .then((data) => {
      // This 'data' refer to the return of the first promise 'setTimer'
      console.log(data, posData);
    });
  setTimer(1000).then(() => {
    console.log("Timer done!");
  });
  //This code will run first  - Execution Order
  console.log("Getting position...");
}

async function trackUserHandlerTwo() {
  let posData;
  let timerData;

  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (e) {
    console.log("message > ", e.message);
    console.log("code > ", e.code);
  }

  console.log(timerData, posData);
}

button.addEventListener("click", trackUserHandlerTwo);

/*
let result = 0;

// For loop run first
for (let i = 0; i < 100000000; i++) {
  result += i;
}

console.log(result);
*/

/*
 * TYPOS
 *
 * async , await are always use in front of functions
 * async in front of a function automatically allow it to return a <promise>
 * async also wrap all the content of a function into a single promise data
 *
 * await is add in front of any promise
 * */
