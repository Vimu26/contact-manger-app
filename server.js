const express = require("express");
const server = express();
const mongoose = require("mongoose");
const cors = require("cors");
const users = require("./routes/users.routes");
const contacts = require("./routes/contact.routes");
require("dotenv").config();

mongoose
  .connect("mongodb://127.0.0.1:27017/contact-manager-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Database Connected Successfully!!"))
  .catch((err) => {
    console.error(err);
  });

server.use(cors());
server.use(express.json());

server.use("/users", users);
server.use("/contacts", contacts);

server.listen(process.env.PORT, function check(error) {
  if (error) {
    console.error(error.message);
  } else {
    console.log(`Api Started Successfully in Port ${process.env.PORT}!`);
  }
});

server.get("/", function (req, res) {
  res.render("Hello World");
});
