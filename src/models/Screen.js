const Screen = (sequelize, DataTypes) => { 
  return sequelize.define('Screen', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rows: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    columns: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    theatre_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
};

module.exports = Screen;