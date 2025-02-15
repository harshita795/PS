const express = require("express");
const app = express();
const book = require("./models/book.js");
const { sequelize } = require("./config/database.js");

const PORT = 3000;
app.use(express.json());

const books = [
  {
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    releaseYear: 1925,
  },
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    releaseYear: 1960,
  },
  {
    name: "1984",
    author: "George Orwell",
    releaseYear: 1949,
  },
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

app.post("/new-book", async (req, res) => {
  try {
    const bookName = req.body.name;
    await book.create({
      name: bookName,
    });

    res
      .status(200)
      .json({ message: "New book added successfully.", name: bookName });
  } catch (error) {
    res.status(500).json({
      message: "Unexpected error occurred while creating new book entry",
      error: error,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
