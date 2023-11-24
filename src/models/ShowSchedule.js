const ShowSchedule = (sequelize, DataTypes) => {
  return sequelize.define('ShowSchedule', {
    showStartTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    showEndTime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  })
};

module.exports = ShowSchedule