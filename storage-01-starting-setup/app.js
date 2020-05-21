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
  document.cookie = `uid=${userId}`; //Store cookie with template litteral
});

retrieveCookie.addEventListener("click", () => {
  console.log(document.cookie);
});
