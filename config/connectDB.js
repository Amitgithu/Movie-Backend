require('dotenv').config()
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log(process.env.DB_URL);
    await mongoose.connect('mongodb://localhost:27017/movie');
    console.log(`Connected to MongoDB successfully`.bgGreen.white);
  } catch (error) {
    console.log(`MongoDB Error: ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
