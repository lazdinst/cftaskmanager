let request = require('supertest');
console.log('Testing Started');
const { app } = require('../server/index');
const {expect} = require('chai');

describe('Express Middleware', function() {
  it('should have index.html', function() {
    return request(app).get('/')
      .expect(200)
      .expect('Content-Type', /html/);
  });
});