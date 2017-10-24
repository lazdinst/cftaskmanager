const { getAllTasks } = require('../../client/store/actions/app');

const app = require('../../server/app');
const supertest = require('supertest');
const request = require('request');
const req = supertest.agent(app);

describe('Server', () => {
  it('returns the index', () => req.get('/').expect(200));
});
