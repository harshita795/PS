const express = require("express");
const app = express();
const student = require("./models/student.js");
let { sequelize } = require("./config/database.js");

const PORT = 3000;
app.use(express.json());

let studentData = [{ name: "John Doe" }, { name: "Rita Singh" }];

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

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
