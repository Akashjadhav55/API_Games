let games = [
  {
    gameId: 1,
    title: 'The Legend of Zelda: Breath of the Wild',
    genre: 'Adventure',
    platform: 'Nintendo Switch',
  },
  {
    gameId: 2,
    title: 'Red Dead Redemption 2',
    genre: 'Action',
    platform: 'PlayStation 4',
  },
  {
    gameId: 3,
    title: 'The Witcher 3: Wild Hunt',
    genre: 'RPG',
    platform: 'PC',
  },
];

let getAllGames = () => {
  return games;
};

let getAllGamesByID = (id) => {
  return games.find((e) => e.gameId === id);
};

module.exports = { getAllGames, getAllGamesByID };
