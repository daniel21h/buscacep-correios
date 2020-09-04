const express = require('express')

const SearchCepController = require('./controllers/SearchCepController')

const routes = express.Router()
const searchCepController = new SearchCepController()

routes.get('/search-cep', searchCepController.index)
routes.post('/search-cep', searchCepController.create)

module.exports = routes