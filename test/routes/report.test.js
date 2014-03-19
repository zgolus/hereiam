var request = require('supertest')
    , should = require('should')
    , app = require('../../app');

describe('Recipe API', function() {
    describe('GET /reports', function() {
        it('should return an array of reports', function(done) {
            request(app)
                .get('/reports')
                .expect(200, done);
        });
    });
});