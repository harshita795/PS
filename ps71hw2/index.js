const express = require("express");
const app = express();
const movie = require("./models/movie.js");
const { sequelize } = require("./config/database.js");

const PORT = 3000;
app.use(express.json());

const movies = [{ name: "Inception" }, { name: "Iron Man" }, { name: "Thor" }];

app.get("/seed_db", async (req, res) => {
  try {
    await sequelize.sync({ force: true });

    await movie.bulkCreate(movies);

    res.status(200).json({ message: "Data has been successfully added." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in sedding the data.", error: error.message });
  }
});

app.post("/new-movie", async (req, res) => {
  try {
    const movieName = req.body.name;
    await movie.create({
      name: movieName,
    });

    res.status(200).json({
      message: "New movie record added successfully!",
      name: movieName,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unexpected error occurred while creating new movie entry",
      error: error,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
