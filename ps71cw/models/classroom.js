const { sequelize, DataTypes } = require("../config/database.js");

const classroom = sequelize.define("classroom", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = classroom;
