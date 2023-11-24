const Movie = (sequelize, DataTypes) => {
  return sequelize.define('Movie', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    certificate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false
    },
    supported_subtitles: {
      type: DataTypes.STRING,
    }
  })
}

module.exports = Movie
