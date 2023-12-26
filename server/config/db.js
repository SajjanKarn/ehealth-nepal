const mongoose = require("mongoose");

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1/ehealthnepal";

const connectDB = async () => {
  return mongoose
    .connect(MONGODB_URI)
    .then(() => console.log(`server connected to db`))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
