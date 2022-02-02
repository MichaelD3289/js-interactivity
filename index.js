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
  message.textContent = `${event.target.previousSibling.textContent} deleted!`
  revealMessage()
}

const crossOffMovie = event => {
  event.target.classList.toggle('checked')
  if (event.target.classList.contains('checked')) {
    message.textContent = `${event.target.textContent} watched!` 
  } else {
  message.textContent = `${event.target.textContent} added back!`;
} 
  revealMessage()
}

const revealMessage = () => {
  message.classList.remove('hide');
  setTimeout(() => message.classList.add('hide'), 1000)
}