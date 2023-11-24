const constants = require('../constants');
const cityService = require('../services/cityService');

module.exports.getCities = async (req, res) => {
  const defaultResponse = { ...constants.DEFAULT_RESPONSE };
  try {
    const cities = await cityService.getCities(req.query);
    defaultResponse.status = 200;
    defaultResponse.message = cities?.length > 0 ? constants.CITIES.successResponse : constants.CITIES.noData;
    defaultResponse.data = cities;
  } catch (error) {
    console.log('Error while fetching cities. Details: ', error);
    defaultResponse.status = 500;
    defaultResponse.message = error.message;
  } finally {
    res.send(defaultResponse);
  }
}