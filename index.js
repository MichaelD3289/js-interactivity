const message = document.querySelector('#message');

const addMovie = event => {
  event.preventDefault();
  const inputField = document.querySelector('input');
  let movie = document.createElement('li');
  let movieTitle = document.createElement('span');
  movieTitle.textContent = inputField.value

  movieTitle.addEventListener('click', crossOffMovie);

  console.log(movieTitle);
  movie.appendChild(movieTitle);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X'
  deleteBtn.addEventListener('click', deleteMovie);
  movie.appendChild(deleteBtn);

  document.querySelector('ul').appendChild(movie);
  inputField.value = "";
}

document.querySelector('form').addEventListener('submit', addMovie);

const deleteMovie = event => {
  event.target.parentNode.remove();
  message.textContent = 'Movie deleted!'
}

const crossOffMovie = event => {
  event.target.classList.toggle('checked')
  (event.target.classList.contains('checked') ? message.textContent = 'Movie Watched' : message.textContent = 'Movie added back!')
}
