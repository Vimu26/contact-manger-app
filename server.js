const express = require("express");
const server = express();
const mongoose = require("mongoose");
const cors = require("cors");
const users = require("./routes/users.routes");
const contacts = require("./routes/contact.routes");

mongoose
  .connect("mongodb://127.0.0.1:27017/contact-manager-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database Connected Successfully!!"))
  .catch((err) => {
    console.error(err);
  });


server.use(cors());

server.use(express.json());

server.use("/users",users);
server.use("/contacts",contacts);

server.listen(3500, function check(error) {
  if (error) {
    console.error(error);
  } else {
    console.log("Express Started Successfully");
  }
});

server.get("/", function (req, res) {
  res.render("Hello World");
});
