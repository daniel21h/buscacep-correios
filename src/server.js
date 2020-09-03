const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const server = express()

server.use(cors())
server.get('/', routes.index)

server.listen(3333, () => {
  console.log('Server running on port 3333.')
})