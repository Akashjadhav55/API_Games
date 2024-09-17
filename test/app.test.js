const { app } = require('../index');
const { getAllGames, getAllGamesByID } = require('../controllers/data');

const http = require('http');
const request = require('supertest');

jest.mock('../controllers/data', () => ({
  ...jest.requireActual('../controllers/data'),
  getAllGames: jest.fn(),
  getAllGamesByID: jest.fn(),
}));

let server;

beforeAll(async () => {
  server = http.createServer(app);
  server.listen(3010);
});
afterAll(async () => {
  server.close();
});

describe('Controller Function tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return all Games', () => {
    const mockedGames = [
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

    getAllGames.mockReturnValue(mockedGames);
    const result = getAllGames();

    expect(result).toEqual(mockedGames);
    expect(result.length).toBe(3);
  });
});

describe('API Endpoint tests', () => {
  it('GET /Games should get all Games', async () => {
    const res = await request(server).get('/games');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      games: [
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
      ],
    });
    expect(res.body.games.length).toBe(3);
  });

  it('GET /Games/details/:id should get an games by ID', async () => {
    const res = await request(server).get('/games/details/1');
    expect(res.status).toBe(200);
  });
});
