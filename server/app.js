require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

// require db
const connectDB = require("./config/db");

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// routes
app.use("/api/doc", require("./routes/doctorAuth"));
app.use("/api/pat", require("./routes/patientAuth"));

// server configurations are herer
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`server listening on port: ${PORT}`);
});
