const PinCode = (sequelize, DataTypes) => {
  return sequelize.define('PinCode', {
    code: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
};

module.exports = PinCode