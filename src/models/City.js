const City = (sequelize, DataTypes) => {
  return sequelize.define('City', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    }   
  })
};

module.exports = City