const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameId = 'yq8bW35oxhEU8iYMXlzp';
const updateScoreUrl = `${baseUrl}games/${gameId}/scores/`;
const scoreBoardContainer = document.querySelector('.board-container');

const displayScore = (results) => {
  
  results.forEach((player) => {
    scoreBoardContainer.innerHTML += `<li class="list-group-item">${player.user}: ${player.score}</li>`;
  });
};

// get updated scores from API
const getScores = async () => {
  await fetch(updateScoreUrl)
    .then((response) => response.json())
    .then((json) => displayScore(json.result));
};

export default getScores;