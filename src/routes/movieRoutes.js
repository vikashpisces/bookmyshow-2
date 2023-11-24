const express = require('express')
const Router = express.Router()
const { getMovies } = require('../controllers/movieController')

Router.get('/', getMovies)

module.exports = Router