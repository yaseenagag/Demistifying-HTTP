const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (request, response) => {
  response.set('Content-type', 'text/html').sendFile(path.join(__dirname, '../../public/views/index.html'))
})

router.get('/search', function (request, response) {
  response.set('Content-type', 'text/plain')
  if ('q' in request.query) {
    response.status(200).send("You searched for:'doodads'")
  } else {
    response.status(400).send("You didn't provide a search query term :(")
  }
})

router.post('/things', function(request, response) {
  response.set('Content-type', 'text/plain')
  response.status(201).send(`New thing created: flying car!`)
  })

router.get('/somefile', function(request, response) {
  if (request.accepts('text/html')) {
    response.set('Content-type', 'text/html')
    response.status(200).send('<!DOCTYPE html><html><body>This is an HTML file</body></html>')
  } else {
    response.status(400).end()
  }
})

router.get('/myjsondata', function(request, response) {
  if(request.accepts('application/json')) {
    response.set('Content-type', 'application/json')
    response.status(200).send({ 'title': 'some JSON data' })
  } else {
    response.status(400).end()
  }
})

router.get('/old-page', function(request, response) {
  response.redirect(301,'/newpage')
})

router.get('/newpage', function(request, response) {
  response.status(301)
  response.set('content-location','http://localhost:3000/newpage')
  .send()
})

router.post('/admin-only', function(request, response) {
  response.status(403).end()
})

router.get('/not-a-page', function(request, response) {
  response.status(404).end()
})

router.get('/server-error', function(request, response) {
  response.status(500).end()
})

module.exports = router
