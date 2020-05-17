const button = document.querySelector("button");
const output = document.querySelector("p");

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      console.log(posData);
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
