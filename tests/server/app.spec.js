const app = require('../../server/app');
const supertest = require('supertest');

const request = supertest.agent(app);

describe('Server', () => {
  it('returns the index', () => request.get('/').expect(200));
});
