const { sequelize, DataTypes } = require("../config/database.js");
const teacher = require("./teacher.js");

const classroom = sequelize.define("classroom", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  teacherId: {
    type: DataTypes.NUMBER,
  },
});

// relationsips
classroom.belongsTo(teacher, { foreignKey: "teacherId" });
teacher.hasMany(classroom, { foreignKey: "teacherId" });

module.exports = classroom;
