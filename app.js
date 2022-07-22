require("dotenv/config");

require("./db");

const express = require("express");
const app = express();

require("./config")(app);

app.use("/api", require("./routes/index.routes"));

require("./error-handling")(app);

module.exports = app