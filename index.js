const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8000;
const passport = require("passport");
// const passportJWT = require("./config/passport-jwt-strategy");
const bodyParser = require("body-parser");
var cors = require("cors");

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport-jwt-strategy")(passport);

// Routes
app.use("/", require("./routes"));

app.use("/uploads", express.static("uploads"));

// make the upload path available to the browser
app.use("/public", express.static(__dirname + "/public"));

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
