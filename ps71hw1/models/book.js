let { DataTypes, sequelize } = require("../config/database.js");

let book = sequelize.define("book", {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = book;
