const button = document.querySelector("button");
const output = document.querySelector("p");

function trackUserHandler() {
  console.log("Clicked!");
}

// Function run in second
button.addEventListener("click", trackUserHandler);

let result = 0;

// For loop run first
for (let i = 0; i < 100000000; i++) {
  result += i;
}

console.log(result);
