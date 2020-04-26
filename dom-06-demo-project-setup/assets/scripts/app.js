/** @format */

//const addMovieModal = document.querySelector('#add-modal');
//const addMovieModal = document.body.children[1];

// Consider using Id for picking up the element
//const startAddMoviebutton = document.querySelector('header').lastElementChild;
//const backdropElement = document.getElementById('backdrop');
const addMovieModal = document.getElementById('add-modal');
const startAddMoviebutton = document.querySelector('header button');
const backdropElement = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const addMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const listMovie = document.getElementById('movie-list');
const deleteMovieModal = document.getElementById('delete-modal');
const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
const confirmDeletionButton = cancelDeletionButton.nextElementSibling;

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  console.log('spliced movies', movies);
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div  class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;

  listMovie.append(newMovieElement);
  newMovieElement.addEventListener('click', deleteMovieHandler.bind(this, id));
};

const toggleBackdrop = () => {
  backdropElement.classList.toggle('visible');
};

const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
  toggleBackdrop();
};

const closeMovieDeletionModal = () => {
  deleteMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

const cancelAddMovieModal = () => {
  closeMovieModal();
};

const cancelMovieDeletionModal = () => {
  closeMovieDeletionModal();
};

const deleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const backdropClickHandler = () => {
  closeMovieModal();
  cancelMovieDeletionModal();
};

const addMovieHandler = () => {
  const movieTitle = userInputs[0].value;
  const imageUrl = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    movieTitle.trim() === '' ||
    imageUrl.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5).');
    return;
  }

  const newMovie = {
    id: Math.trunc(Math.random() * 100),
    title: movieTitle,
    image: imageUrl,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

startAddMoviebutton.addEventListener('click', showMovieModal);
backdropElement.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieModal);
addMovieButton.addEventListener('click', addMovieHandler);
cancelDeletionButton.addEventListener('click', backdropClickHandler);
