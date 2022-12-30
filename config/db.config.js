const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://test:test@cluster0.9x6t9fs.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

const con = mongoose.connection;

con.on("open", () => {
  console.log("DB is successfully connected");
});
