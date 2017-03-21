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
  response.status(200).send("doodads")
})

server.get('/things', function(request, response) {
  response.set('Content-type', 'text/plain')
  response.status(400).send("You didn't provide a search query term :(" {
})

server.post('/things', function(request, response) {
  response.set('Content-type', 'text/plain')
  response.status(201).send("flying car!") {
  })







server.set(port)

http.listen(port)

module.exports = server
