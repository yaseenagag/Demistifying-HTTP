const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const port = process.env.PORT || 3000
const http = require('http').createServer(server)
const path = require('path')


server.use(bodyParser.text({type: 'text/plain'}))

server.get('/', function(request, response) {
  response.set('Content-type', 'text/plain')
  response.status(200).send('Welcome to Sandbox!')
})

server.get('/search', function (request, response) {
  response.set('Content-type', 'text/plain')
  if ('q' in request.query) {
    response.status(200).send("You searched for:'doodads'")
  } else {
    response.status(400).send("You didn't provide a search query term :(")
  }
})

server.post('/things', function(request, response) {
  response.set('Content-type', 'text/plain')
  response.status(201).send(`New thing created: flying car!`)
  })

server.get('/somefile', function(request, response) {
  if (request.accepts('text/html')) {
    response.set('Content-type', 'text/html')
    response.status(200).send('<!DOCTYPE html><html><body>This is an HTML file</body></html>')
  } else {
    response.status(400).end()
  }
})

server.get('/myjsondata', function(request, response) {
  if(request.accepts('application/json')) {
    response.set('Content-type', 'application/json')
    response.status(200).send({ 'title': 'some JSON data' })
  } else {
    response.status(400).end()
  }
})

server.get('/old-page', function(request, response) {
  response.redirect(301,'/newpage')
})

server.get('/newpage', function(request, response) {
  response.status(301)
  response.set('content-location','http://localhost:3000/newpage')
  .send()
})

server.post('/admin-only', function(request, response) {
  response.status(403).end()
})

server.get('/not-a-page', function(request, response) {
  response.status(404).end()
})

server.get('/server-error', function(request, response) {
  response.status(500).end()
})

module.exports = server
