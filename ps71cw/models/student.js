let { DataTypes, sequelize } = require("../config/database.js");

const student = sequelize.define("student", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = student;
