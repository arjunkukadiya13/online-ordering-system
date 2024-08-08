// index.js
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS for requests from specified origins
app.use(cors({
  origin: ["http://localhost:5173"], // Allow requests from this origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
}));

// Database connection
const dbConfig = require("./config/db.config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.url)
  .then(() => {
    console.log("Connection established with the database");
  })
  .catch((err) => {
    console.error("Error in database connection: ", err);
    process.exit(1);
  });

// Routes
const routes = require("./routes");
app.use("/api", routes); // Ensure this is after the CORS middleware

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Server is running on port ${port}`));
