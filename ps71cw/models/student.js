let { DataTypes, sequelize } = require("../config/database.js");

const student = sequelize.define("student", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.STRING,
    defaultValue: 18,
  },
});

module.exports = student;
