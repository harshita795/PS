const express = require("express");
const app = express();
const book = require("./models/book.js");
const { sequelize } = require("./config/database.js");

const PORT = 3000;
app.use(express.json());

const books = [
  { name: "The Great Gatsby" },
  { name: "To Kill a Mockingbird" },
  { name: "1984" },
];

app.get("/seed_db", async (req, res) => {
  try {
    await sequelize.sync({ force: true });

    await book.bulkCreate(books);
    res.status(200).json({ message: "Data has been successfully added." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in seeding the data.", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
