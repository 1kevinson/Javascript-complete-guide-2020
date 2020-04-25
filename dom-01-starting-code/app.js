/** @format */

const section = document.querySelector('section');
const visibilityBtn = document.querySelector('button');

section.className = 'red-bg';

visibilityBtn.addEventListener('click', () => {
  section.classList.toggle('invisible');
});
