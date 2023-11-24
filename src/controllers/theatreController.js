const constants = require("../constants")
const theatreService  = require('../services/theatreService')

module.exports.getTheatres = async (req, res) => {
  const defaultResponse = constants.DEFAULT_RESPONSE
  try {
    const theatres = await theatreService.getTheatres(req.query)
    defaultResponse.status = 200
    defaultResponse.message = theatres?.length > 0 ? constants.THEATRES.successResponse : constants.THEATRES.noData
    defaultResponse.data = theatres
  } catch (error) {
    console.log('Error while fetching theatres. Details: ', error);
    defaultResponse.status = 500
    defaultResponse.message = error.message
  } finally {
    res.send(defaultResponse)
  }
}