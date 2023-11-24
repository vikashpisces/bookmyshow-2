const jwt = require('jsonwebtoken')
const { Booking, User } = require('../models')

module.exports.createBooking = async (body) => {
  const { body, header } = req
  
  if(!body) {
    throw new Error('Invalid booking details.')
  }

  if(!header?.authorization) {
    throw new Error('Unauthorized access.')
  }

  const user = await jwt.verify(header.authorization, process.env.JWT_SECRET)
  const userPayload = await User.findOne({ where: { id: user.id } })
  if(!userPayload) {
    throw new Error('You seem to be an unauthenticated user.')
  }
  
  const bookingPayload = {
    booking_date: new Date(),
    booking_status: 'success'
  }


  return Booking.create({...bookingPayload, userId: userPayload.id})
}