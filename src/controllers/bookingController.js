const bookingService = require('../services/bookingService');
const constants = require('../constants');

module.exports.createBooking = async (req, res) => {
  const defaultResponse = { ...constants.DEFAULT_RESPONSE };
  try {
    const booking = await bookingService.createBooking(req);
    defaultResponse.status = 200;
    defaultResponse.message = constants.BOOKING.successResponse;
    defaultResponse.data = booking;
  } catch (error) {
    console.log('Error while creating booking. Details: ', error);
    defaultResponse.status = 500;
    defaultResponse.message = error.message;
  } finally {
    res.send(defaultResponse);
  }
}