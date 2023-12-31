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
app.get("/", (_, res) => {
  res.send("EHealth App Api.")
})
app.use("/api/doc", require("./routes/doctorAuth"));
app.use("/api/pat", require("./routes/patientAuth"));

app.use("/api", require("./routes/appointment"));

// server configurations are herer
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`server listening on port: ${PORT}`);
});
