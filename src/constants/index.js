module.exports = {
  DEFAULT_RESPONSE: {
    status: 200,
    message: '',
    data: {}
  },
  USER_MESSAGE: {
    userCreated: 'User Created Successfully',
    invalidUserPwd: 'Invalid email or password',
    userAuthenticated: 'User Authenticated Successfully',
    forbidden: 'Forbidden'
  },
  THEATRES: {
    successResponse: 'Successfully fetched all theatres',
    noData: 'There are no theatres exist in given city at this moment'
  },
  CITIES: {
    successResponse: 'Successfully fetched all cities',
    noData: 'There are no cities exist for given state'
  },
  SHOWS: {
    successResponse: 'Successfully fetched all shows',
    noData: 'There are no shows running in the theatre on given date'
  },
  BOOKING: {
    successResponse: 'Booking is successful'
  }
}