const { getAllTasks } = require('../../client/store/actions/app');
console.log(getAllTasks());

const app = require('../../server/app');
const supertest = require('supertest');
const req = supertest.agent(app);

describe('Server', () => {
  it('returns the index', () => req.get('/').expect(200));
});
