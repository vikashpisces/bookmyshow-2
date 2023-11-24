const movieService = require('../services/movieService')
const constants = require('../constants')

module.exports.getMovies = async (req, res) => {
  const defaultResponse = { ...constants.DEFAULT_RESPONSE }
  try {
    const shows = await movieService.getMovies(req.query)
    defaultResponse.status = 200
    defaultResponse.message = shows?.length > 0 ? constants.SHOWS.successResponse : constants.SHOWS.noData
    defaultResponse.data = shows
  } catch (error) {
    console.log('Error while fetching shows. Details: ', error);
    defaultResponse.status = 500
    defaultResponse.message = error.message
  } finally {
    res.send(defaultResponse)
  }
}