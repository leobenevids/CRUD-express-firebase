"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");

// routes
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api", studentRoutes.routes);

app.listen(config.port, () => {
  console.log(`App is running on url http://localhost:${config.port}`);
});
