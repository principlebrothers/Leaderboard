import updateScoreUrl from "./api_url";

const scoreBoardContainer = document.querySelector(".board-container");

const displayScore = async () => {
  const results = await getScores();

  results.forEach((player) => {
    scoreBoardContainer.innerHTML += `<li class="list-group-item">${player.user}: ${player.score}</li>`;
  });
};

// get updated scores from API
const getScores = async () => {
  const respose = await fetch(updateScoreUrl);
  const { result: scores } = await respose.json();
  const sortScores = scores.sort((a, b) => b.score - a.score);

  return sortScores;
};

export{
  displayScore, scoreBoardContainer
};
