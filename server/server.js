const express = require("express");
const colors = require("colors");
const connectDB = require("./db/index");
const dotenv = require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

const app = express();

connectDB();

// middlewares
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(bodyParser.json());

// routes
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`.yellow.bold);
});
