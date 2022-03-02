const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
const resultRoutes = require("./controllers/results");
app.use("/results", resultRoutes);

module.exports = app;
