const mongoose = require("mongoose");

const connectDB = async () => {
  return mongoose
    .connect(`mongodb://127.0.0.1/ehealthnepal`)
    .then(() => console.log(`server connected to db`))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
