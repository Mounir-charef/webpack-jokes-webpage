import generateJoke from './joke.js'
import './style/main.scss'
import laughing from './assets/laughing.svg'

const laughImg = document.getElementById('laugh');
laughImg.src = laughing;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click',generateJoke);

generateJoke()