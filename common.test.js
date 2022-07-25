let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing my get Api', () => {
    it('should be return status 200', function(done){
        chai
            .request('https://github.com/gokula1995/JenkinsDemo.git')
            .get('/')
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err);
            });
    });
});
