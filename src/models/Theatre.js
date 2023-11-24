const Theatre = (sequelize, DataTypes) => {
  return sequelize.define('Theatre', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {

  })
}

module.exports = Theatre
