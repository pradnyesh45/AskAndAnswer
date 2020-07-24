const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8000;

app.use("/", require("./routes"));

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
