const { Theatre } = require('../models')
module.exports.getTheatres = (queryParams) => {
  return Theatre.findAll({
    where: {
      city: queryParams.city
    }
  })
}