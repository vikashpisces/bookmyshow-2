const Theatre = (sequelize, DataTypes, Sequelize) => {
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
    },
    pin_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contact_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email_id: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    hooks : {
      beforeCreate : (record, options) => {
          record.dataValues.createdAt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/g, '');
          record.dataValues.updatedAt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/g, '');
      },
      beforeUpdate : (record, options) => {
          record.dataValues.updatedAt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/g, '');
      }
    }
  })
}

module.exports = Theatre
