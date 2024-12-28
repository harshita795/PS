let { DataTypes, sequelize } = require("../config/database.js");

let movie = sequelize.define("movie", {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = movie;
