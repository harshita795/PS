let { DataTypes, sequelize } = require("../config/database.js");

let book = sequelize.define("book", {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
  },
  releaseYear: {
    type: DataTypes.NUMBER,
  },
});

module.exports = book;
