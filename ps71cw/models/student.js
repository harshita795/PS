let { DataTypes, sequelize } = require("../config/database.js");

const student = sequelize.define("student", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: DataTypes.STRING,
    defaultValue: 18,
    allowNull: false,
  },
});

module.exports = student;
