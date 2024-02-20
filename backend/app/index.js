const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

require("dotenv").config();

//db configuration
const sequelize = require("./utils/db");

// Model Routers
const userRoutes = require("./routes/userRoutes");
const quizRoutes = require("./routes/quizRoutes");
const questionRoutes = require("./routes/questionRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

// Server Creation
const app = express();

app.use(cors());

app.use(morgan("dev")); //logs
app.use(express.json()); //converts JSON data

app.use(bodyParser.urlencoded({ extended: true })); //converts URL encoded data

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, UPDATE, DELETE");
  next();
});

// Routes
app.use("/api/v1", userRoutes);
app.use("/api/v1", quizRoutes);
app.use("/api/v1", questionRoutes);
app.use("/api/v1", subjectRoutes);
app.use("./api/v1", reviewRoutes);

// Initialize Sequelize
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to database has been established successfully.");

    return sequelize.sync(); //sync models with database&create table if don't exist
  })

  .then(() => {
    console.log("Models have been synchronized with the database.");
    //Start the server
    const PORT = process.env.NODE_DOCKER_PORT || process.env.NODE_LOCAL_PORT;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("unable to connect to database", error);
  });
