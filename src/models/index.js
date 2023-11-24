const { DataTypes, Sequelize } = require('sequelize');
const { getSequelize } = require('../database/mysql/index');
const sequelize = getSequelize()

const models = {};

models.User = require('./User')(sequelize, DataTypes, Sequelize);
models.Theatre = require('./Theatre')(sequelize, DataTypes, Sequelize);
models.Movie = require('./Movie')(sequelize, DataTypes, Sequelize);
models.Screen = require('./Screen')(sequelize, DataTypes, Sequelize);

module.exports = models;