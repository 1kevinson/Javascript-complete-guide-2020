/** @format */

const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (extraName.trim() === '' || extraName.trim() === '') {
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    info: {
      set title(val) {
        if (val.trim() === '') {
          //_tilte refer to internal value
          this._title = 'DEFAULT_TITLE';
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    getFormattedTitle: function () {
      console.log(this);
      return this.info.title.toUpperCase();
    },
  };

  //automatically trigger setter in object
  newMovie.info.title = title;
  movies.push(newMovie);
  renderMovies();
};

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    movieEl = document.createElement('li');
    // Destructuting object
    const { info, ...otherProperties } = movie;
    // const { title: movieTitle } = info;
    const movieTitle = movie.getFormattedTitle();
    let text = movieTitle + ' - ';
    for (const key in info) {
      if (key !== 'title' && key !== '_title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const searchMovieHandler = () => {
  const filterValue = document.getElementById('filter-title').value;
  renderMovies(filterValue);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
