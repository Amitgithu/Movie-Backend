require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(process.env.DB_URL)
    .then(() => {
      console.log(`Connected to MongoDB successfully`.bgGreen.white);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
