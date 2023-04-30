require("colors");
const mongoose = require("mongoose");

const DB_URI = process.env.DB_URI;

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
  })
  .then(() => {
    console.log("Database connected".bgGreen + "\n");
  })
  .catch((error) => {
    console.log(error);
    console.log("**** DB connection error ****".bgRed);
  });
