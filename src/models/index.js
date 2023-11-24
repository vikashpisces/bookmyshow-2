const { DataTypes } = require('sequelize');
const { getSequelize } = require('../database/mysql/index');
const sequelize = getSequelize()

const models = {};

models.User = require('./User')(sequelize, DataTypes);
models.Theatre = require('./Theatre')(sequelize, DataTypes);
models.Movie = require('./Movie')(sequelize, DataTypes);
models.Screen = require('./Screen')(sequelize, DataTypes);

module.exports = models;