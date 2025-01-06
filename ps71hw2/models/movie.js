let { DataTypes, sequelize } = require("../config/database.js");

let movie = sequelize.define("movie", {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
  },
  releaseYear: {
    type: DataTypes.NUMBER,
  },
});

module.exports = movie;
