const { DataTypes, Sequelize } = require('sequelize');
const { getSequelize } = require('../database/mysql/index');
const sequelize = getSequelize()

const models = {};

models.User = require('./User')(sequelize, DataTypes, Sequelize);
models.Theatre = require('./Theatre')(sequelize, DataTypes, Sequelize);
models.Movie = require('./Movie')(sequelize, DataTypes, Sequelize);
models.Screen = require('./Screen')(sequelize, DataTypes, Sequelize);
models.ShowSchedule = require('./ShowSchedule')(sequelize, DataTypes, Sequelize);
models.City = require('./City')(sequelize, DataTypes, Sequelize);
models.PinCode = require('./PinCode')(sequelize, DataTypes, Sequelize);
models.Booking = require('./Booking')(sequelize, DataTypes, Sequelize);

// Relationship between Theatre & Screen - 1:N
models.Theatre.hasMany(models.Screen)
models.Screen.belongsTo(models.Theatre)

// Relationship between Screen & Movies - M:N
models.Screen.belongsToMany(models.Movie, { through:'ScreenMovie' })
models.Movie.belongsToMany(models.Screen, { through: 'ScreenMovie' })

// Relationship between ShowSchedule and Theatre/Screen/Movie - 1:N
models.Theatre.hasMany(models.ShowSchedule)
models.Screen.hasMany(models.ShowSchedule)
models.Movie.hasMany(models.ShowSchedule)

models.ShowSchedule.belongsTo(models.Theatre)
models.ShowSchedule.belongsTo(models.Screen)
models.ShowSchedule.belongsTo(models.Movie)

// Relationship between City & PinCode - 1:N
models.City.hasMany(models.PinCode)
models.PinCode.belongsTo(models.City)

// Relationship of Booking
models.Booking.belongsTo(models.User)
models.Booking.belongsTo(models.ShowSchedule)

module.exports = models;