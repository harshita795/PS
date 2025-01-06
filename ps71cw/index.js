const express = require("express");
const app = express();
const student = require("./models/student.js");
let { sequelize } = require("./config/database.js");

const PORT = 3000;
app.use(express.json());

let studentData = [
  { name: "Rohan Singh", email: "rohan@example.com", age: 21 },
  { name: "Vita Singh", email: "vita@example.com", age: 23 },
];

app.get("/seed_db", async (req, res) => {
  try {
    await sequelize.sync({ force: true });

    await student.bulkCreate(studentData);

    res.status(200).json({ message: "Database seeded successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error seeding the data", error: error.message });
  }
});

app.post("/new-student", async (req, res) => {
  try {
    let studentName = req.body.name;
    await student.create({
      name: studentName,
    });

    res.status(200).json({ message: "New student added successfully." });
  } catch (error) {
    res.status(500).json({
      message: "Unexpected error occured while creating a new student entry.",
      error: error,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
