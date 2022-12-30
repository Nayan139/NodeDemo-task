const express = require("express");
const cors = require("cors");
require("./config/db.config");

const app = express();
const user = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());
app.use(user);

const port = 3030;

app.listen(port, () => {
  console.log("Server is running on:- ", port);
});
