const express = require('express')
const Router = express.Router()

const { getCities } = require('../controllers/cityController')

Router.get('/', getCities)

module.exports = Router