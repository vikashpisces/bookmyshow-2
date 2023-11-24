const express = require('express');
const Router = express.Router();
const { getTheatres } = require('../controllers/theatreController')

Router.get('/', getTheatres)

module.exports = Router