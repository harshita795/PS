const { sequelize } = require("./config/database.js");
const movie = require("./models/movie.js");

const movies = [{ name: "Inception" }, { name: "Iron Man" }, { name: "Thor" }];

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await movie.bulkCreate(movies);

    console.log("Data has been successfully added.");
  } catch (error) {
    console.error("Error in sedding the data.", error);
  }
};

seedDatabase();
