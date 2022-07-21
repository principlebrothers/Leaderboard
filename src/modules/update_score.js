const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameId = 'yq8bW35oxhEU8iYMXlzp';
const updateScoreUrl = `${baseUrl}games/${gameId}/scores/`;

const updateScore = async (player, score) => {
  await fetch(updateScoreUrl, {
    method: 'POST',
    body: JSON.stringify({
      user: player,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
};


export default updateScore;