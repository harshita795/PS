const express = require("express");
const app = express();
const student = require("./models/student.js");
let { sequelize } = require("./config/database.js");
const classroom = require("./models/classroom.js");
const teacher = require("./models/teacher.js");
const data = require("./data.json");

const PORT = 3000;
app.use(express.json());

app.get("/seed_db", async (req, res) => {
  try {
    await sequelize.sync({ force: true });

    // let classRoom = await classroom.create({ name: "Mathematics" });

    // const Student = await student.create({
    //   name: "Vikki Singh",
    //   email: "vikki@example.com",
    //   age: 21,
    //   classroomId: classRoom.id,
    // });

    await teacher.bulkCreate(data.teachers);

    await classroom.bulkCreate(data.classrooms);

    await student.bulkCreate(data.studentData);

    res.status(200).json({
      message:
        "Database seeded with multiple records with foreign key relation",
    });
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
