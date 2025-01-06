const { sequelize, DataTypes } = require("../config/database.js");

const teacher = sequelize.define("teacher", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = teacher;
