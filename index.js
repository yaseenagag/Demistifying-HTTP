const express = require('express')
const server = express()
const logger = require('morgan')
const routes = require('./sandbox-server/routes/path')
const path = require('path')
const port = process.env.PORT || 3001

server.use(express.static(path.join(__dirname, 'public')))
server.use(logger("combined"))
server.use('/', routes)

server.set(process.env.PORT || 3001)
server.listen(port)

module.exports = server
