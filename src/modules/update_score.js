import updateScoreUrl from "./api_url";

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