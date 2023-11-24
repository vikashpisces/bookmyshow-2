const { City } = require('../models')

module.exports.getCities = async (queryParams) => {
  return City.findAll({
    where: {
      state: queryParams.state
    }
  })
}