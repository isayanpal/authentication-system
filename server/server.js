const express = require("express");
const colors = require("colors");
const connectDB = require("./db/index");
const dotenv = require("dotenv").config();
const cors = require("cors");
const errorHandler = require("./middlewares/errorMiddleware");
const port = process.env.PORT || 5000;

const app = express();

connectDB();

// middlewares
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`.yellow.bold);
});
