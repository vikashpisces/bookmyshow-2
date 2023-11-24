const { ShowSchedule, Movie, Theatre } = require('../models')
const { Op } = require("sequelize");
module.exports.getMovies = async (queryParams) => {
  const { theatre, date } = queryParams;

  if(!theatre || !date || (Date.now() > new Date(date).getTime())) {
    return Promise.resolve([])
  }

  return ShowSchedule.findAll({
    where: {
      showStartTime: {
        [Op.gte]: new Date(date)
      },
      showEndTime: {
        [Op.lte]: new Date(date + '23:59:59')
      }
    },
    include: [{
      model: Theatre,
      where: {
        name: theatre
      }
    }, Movie]
  })
}