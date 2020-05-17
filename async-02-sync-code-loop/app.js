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

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      setTimer(2000).then((data) => {
        console.log(data, posData);
      });
    },
    (error) => {
      console.log(error);
    }
  );
  //This code will run first
  console.log("Getting position...");
}

button.addEventListener("click", trackUserHandler);

/*
let result = 0;

// For loop run first
for (let i = 0; i < 100000000; i++) {
  result += i;
}

console.log(result);
*/
