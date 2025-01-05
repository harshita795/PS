const { sequelize } = require("./config/database.js");
const book = require("./models/book.js");

const books = [
  { name: "The Great Gatsby" },
  { name: "To Kill a Mockingbird" },
  { name: "1984" },
];

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await book.bulkCreate(books);
    console.log("Data has been successfully added.");
  } catch (error) {
    console.error("Error in seeding the data.", error);
  }
};

seedDatabase();
