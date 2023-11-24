const express = require('express')
const Router = express.Router()

const { createBooking } = require('../controllers/bookingController')

Router.post('/', createBooking)
module.exports = Router