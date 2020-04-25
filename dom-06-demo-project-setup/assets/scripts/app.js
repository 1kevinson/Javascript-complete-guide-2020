/** @format */

//const addMovieModal = document.querySelector('#add-modal');
//const addMovieModal = document.body.children[1];

// Consider using Id for picking up the element
const addMovieModal = document.getElementById('add-modal');
//const startAddMoviebutton = document.querySelector('header').lastElementChild;
const startAddMoviebutton = document.querySelector('header button');

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
};

startAddMoviebutton.addEventListener('click', toggleMovieModal);