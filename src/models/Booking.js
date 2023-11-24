const Booking = (sequelize, DataTypes, Sequelize) => {
  return sequelize.define('Booking', {
    booking_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    booking_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW') 
    },
    booking_status: {
      type: DataTypes.STRING
    }
  })
};

module.exports = Booking