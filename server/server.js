const path = require('path')
const express = require('express')

const listRoutes = require('./routes/apiserver')
// const mapRoutes = require('./routes/maps')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('api/v1/apiserver', listRoutes)
// server.use('api/v1/maps', mapRoutes)

module.exports = server
