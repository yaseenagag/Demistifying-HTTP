const chai = require('chai')
const chaiHttp = require('chai-http');
const expect = chai.expect
const app = require("./server")

chai.use(chaiHttp);

describe('sandbox-server', function() {
  'use strict'

  context.only('homepage, onload', function(){

    it('respond with status code of 200', function(done) { // <= Pass in done callback
      chai.request(app) //connects you to server.js
      .get('/')
      .end(function(err, response) {
        expect(response).to.have.status(200);
        expect(response.text).to.eql('Welcome to Sandbox!')
        expect(response).to.have.header('Content-type', 'text/plain; charset=utf-8');
        done();
      })
    })

    it('respond with status code 200', function(done) {
      chai.request(app)
      .get('/search')
      .end(function(err, response) {
        expect(response).to.have.status(200);
        expect(response.text).to.eql('doodads')
        expect(response).to.have.header('Content-type', 'text/plain; charset=utf-8');
        done();
      })
    })

    it('responds with status code 400', function(done)') {

    }

    it()
    }
  })

})
