const buttons = document.querySelectorAll("button");

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

/*
button.addEventListener("click", btnClickHandler);

setTimeout(() => {
  button.removeEventListener("click", btnClickHandler);
}, 3000);
*/

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", btnClickHandler);
});

window.addEventListener("scroll", (event) => {
  console.log(event);
});
