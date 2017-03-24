const chai = require('chai')
const chaiHttp = require('chai-http');
const expect = chai.expect
const app = require("../../index")

chai.use(chaiHttp);

describe('sandbox-server', function() {

  context('homepage, onload', function(){

    it('respond with status code of 200', function(done) {
      chai.request(app)
        .get('/')
        .end(function(err, response) {
          expect(response).to.have.status(200);
          expect(response.text).to.eql('Welcome to Sandbox!')
          expect(response).to.have.header('Content-type', 'text/plain; charset=utf-8');
          done();
        })
    })
  })

  context('Doodads search', (done) => {

    it('Should respond with a status code of 200', (done) => {
      chai.request(app)
      .get('/search')
      .query({'q':'doodads'})
      .end((err, response) => {
        expect(response).to.have.status(200)
        expect(response.text).to.eql('You searched for:\'doodads\'')
        expect(response).to.have.header('content-type', 'text/plain; charset=utf-8')
        done()
      })
    })
  })

  context('Bad request response', () => {

    it('Should respond with a status code of 400', (done) => {
      chai.request(app)
      .get('/search')
      .end((err, response) => {
        expect(response).to.have.status(400)
        expect(response.text).to.eql('You didn\'t provide a search query term :(')
        expect(response).to.have.header('content-type', 'text/plain; charset=utf-8')
        done()
      })
    })
  })

  context('Flying car post', () => {

    it('Should respond with a status code of 201', (done) => {
      chai.request(app)
      .post('/things')
      .send({'New thing created': 'flying car'})
      .end((err, response) => {
        expect(response).to.have.status(201)
        expect(response.text).to.eql('New thing created: flying car!')
        expect(response).to.have.header('content-type', 'text/plain; charset=utf-8')
        done()
      })
    })
  })

  context('Get some file', () => {

    it('Should respond with a status code of 200', (done) => {
      chai.request(app)
      .get('/somefile')
      .end((err, response) => {
        expect(response).to.have.status(200)
        expect(response.text).to.eql('<!DOCTYPE html><html><body>This is an HTML file</body></html>')
        expect(response).to.have.header('content-type', 'text/html; charset=utf-8')
        done()
      })
    })
  })

  context('Get json data', () => {

    it('Should respond with a status code of 200', (done) => {
      chai.request(app)
      .get('/myjsondata')
      .set('accept', 'application/json')
      .end((err, response) => {
        expect(response).to.have.status(200)
        expect(response.text).to.eql('{"title":"some JSON data"}')
        expect(response).to.have.header('content-type', 'application/json; charset=utf-8')
        done()
      })
    })
  })

  context('Get old page', () => {

    it('Should respond with a status code of 301', (done) => {
      chai.request(app)
      .get('/old-page')
      .end((err, response) => {
        expect(response.statusCode).to.eql(301)
        expect(response.headers["content-location"]).to.eql('http://localhost:3000/newpage')
        done()
      })
    })
  })

  context('Post admin only', () => {

    it('Should respond with a status code of 403', (done) => {
      chai.request(app)
      .post('/admin-only')
      .end((err, response) => {
        expect(response.statusCode).to.eql(403)
        done()
      })
    })
  })

  context('Not a page', () => {

    it('Should respond with a status code of 404', (done) => {
      chai.request(app)
      .get('/not-a-page')
      .end((err, response) => {
        expect(response.statusCode).to.eql(404)
        done()
      })
    })
  })

  context('Server error', () => {

    it('Should respond with a status code of 500', (done) => {
      chai.request(app)
      .get('/server-error')
      .end((err, response) => {
        expect(response).to.have.status(500)
        done()
      })
    })
  })
})
