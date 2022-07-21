import {trim} from 'lodash';
import './style.css';
import updateScore from './modules/update_score.js';
import { displayScore } from './modules/get_scores.js';

const name = document.getElementById('name');
const score = document.getElementById('score');
const refreshBtn = document.querySelector('.refresh');
const form = document.querySelector('form');
const scoreBoardContainer = document.querySelector('.board-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  updateScore(trim(name.value), trim(score.value));
  form.reset();
});

refreshBtn.addEventListener('click', (event) => {
  event.preventDefault();

  scoreBoardContainer.innerHTML = '';

  displayScore();
});

displayScore();
