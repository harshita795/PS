const { sequelize } = require("./config/database.js");
const student = require("./models/student.js");

let studentData = [{ name: "Priya Yadav" }, { name: "Sita Singh" }];

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await student.bulkCreate(studentData);

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding the data", error);
  }
};

seedDatabase();
