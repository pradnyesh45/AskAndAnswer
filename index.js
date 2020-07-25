const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8000;
const passport = require("passport");
const passportJWT = require("./config/passport-jwt-strategy");

app.use("/", require("./routes"));

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
