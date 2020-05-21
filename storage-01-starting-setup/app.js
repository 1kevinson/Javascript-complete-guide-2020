//localstorage
const storeBtn = document.getElementById("store-btn");
const retrieve = document.getElementById("retrieve-btn");

const userId = "u123";
const user = {
  name: "Arsene",
  age: 26,
  Hobbies: ["coding", "basketball"],
};

storeBtn.addEventListener("click", () => {
  localStorage.setItem("uid", userId);
  localStorage.setItem("user", JSON.stringify(user));
});

retrieve.addEventListener("click", () => {
  const extractedData = localStorage.getItem("uid");
  const userExtracted = localStorage.getItem("user");

  if (extractedData) {
    console.log("Got the id - ", extractedData);
    console.log(JSON.parse(userExtracted));
  } else {
    console.log(" No data retrieved");
  }
});

// SessionStorage data live as long the page is open in the browser

// Cookies

const cookieBtn = document.getElementById("cookie-btn");
const retrieveCookie = document.getElementById("retrieve-cookie-btn");

cookieBtn.addEventListener("click", () => {
  const userId = "u123";
  const user = { name: "kevin", age: 27 };
  document.cookie = `uid=${userId}`; //Store cookie with template litteral
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrieveCookie.addEventListener("click", () => {
  const firstArray = document.cookie.split(";")[1].split("=");
  const userCookie = JSON.parse(firstArray[1]);
  console.log(userCookie);
});

// Webpack is veryusefull if we want to combine all js file in one, and also because all browser don't support "module" in html tag
