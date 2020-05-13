const button = document.querySelector("button");

/*
const btnClickHandler = (event) => {
    event.target.disabled = true;
  const styleElementClicked = event.toElement.style;
  styleElementClicked.backgroundColor = "grey";
  styleElementClicked.border = "grey";
  styleElementClicked.cursor = "no-drop";
  console.log(event);
};

const anotherBtnClickHandler = () => {
  console.log("This was clicked !");
};

button.addEventListener("click", btnClickHandler);

setTimeout(() => {
  button.removeEventListener("click", btnClickHandler);
}, 3000);

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", btnClickHandler);
});

window.addEventListener("scroll", (event) => {
  console.log(event);
});*/

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

//Testing capturing and bubbling
div = document.querySelector("div");
div.addEventListener("click", (event) => {
  console.log("CLICKED DIV");
  console.log(event);
});

button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("CLICKED BUTTON");
  console.log(event);
});
