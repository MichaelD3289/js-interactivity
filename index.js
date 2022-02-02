const addMovie = (event) => {
  event.preventDefault();
  const inputField = document.querySelector('input');
  let movie = document.createElement('li');
  let movieTitle = document.createElement('span');
  movieTitle.textContent = inputField.value
  console.log(movieTitle);
  movie.appendChild(movieTitle);
  document.querySelector('ul').appendChild(movie);
  inputField.value = "";
}

document.querySelector('form').addEventListener('submit', addMovie);