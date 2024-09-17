const express = require('express');
const cors = require('cors');
const { getAllGames, getAllGamesByID } = require('./controllers/data');

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

// Exercise 1: Retrieve All Games
app.get('/games', async (req, res) => {
  const games = await getAllGames();
  res.json({ games });
});

// Exercise 2: Retrieve Game by ID
app.get('/games/details/:id', async (req, res) => {
  let games = await getAllGamesByID(parseInt(req.params.id));
  res.json({ games });
});

module.exports = { app };

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
