let { DataTypes, sequelize } = require("../config/database.js");
const classroom = require("./classroom.js");

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
  classroomId: {
    type: DataTypes.NUMBER,
  },
});

// relationships
student.belongsTo(classroom, { foreignKey: "classroomId" }); // adds classroomId as foriegn key to student
classroom.hasMany(student, { foreignKey: "classroomId" }); // sets up one to many relationships

module.exports = student;
