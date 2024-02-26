const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const sequelize = require("./app/utils/db.js");
require("dotenv").config();

app.use(cors());
app.use(morgan("dev")); //logs
app.use(express.json()); //converts JSON data
app.use(bodyParser.urlencoded({ extended: true })); //converts URL encoded data

//?
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  next();
});

//Swagger setup
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = require("./swagger.js");

// Use Swagger UI
const specs = swaggerJsDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Model Routers
const userRoutes = require("./app/routes/userRoutes.js");
const quizRoutes = require("./app/routes/quizRoutes.js");
const questionRoutes = require("./app/routes/questionRoutes.js");
const subjectRoutes = require("./app/routes/subjectRoutes.js");
const reviewRoutes = require("./app/routes/reviewRoutes.js");


// Routes
app.use('/api/v1', userRoutes);
app.use('/api/v1', quizRoutes);
app.use('/api/v1', questionRoutes);
app.use('/api/v1', subjectRoutes);
app.use('/api/v1', reviewRoutes);

// // Use Swagger UI
// const specs = swaggerJsDoc(options);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));



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

  
