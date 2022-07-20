import './style.css';
import updateScore from './modules/update_score';
import getScores from './modules/get_scores';

const name = document.getElementById('name');
const score = document.getElementById('score');
const refreshBtn = document.querySelector('.refresh');
const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  updateScore(name.value, score.value);
  form.reset();
});

refreshBtn.addEventListener('click', () => {
  document.location.reload()
  getScores();
});

getScores();
