require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter");
const User = require("./models/User");
const cors = require("cors");

mongoose.connect(process.env.MONGO_URL, (error) => {
  if (error) {
    console.log(error);
  }
});
mongoose.Promise = global.Promise;

app.use(cors());
app.use("/user", express.json(), userRouter);
app.use("/", express.json(), adminRouter);

/* app.get("/users/api", (req, res) => {
  User.find({}, (error, users) => {
    if (error) {
      console.log(error);
    }
    res.send(users);
  });
}); */

if (process.env.NODE_ENV != "development") {
  //Se não for desenvolvimento, o express vai servir o arquivo estático, ou seja, o BACKEND vai servir o arquivo build do React. Do contrário, o ambiente de desenvolvimento do React vai comunicar com o BACKEND.
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
}
//PROXY serve para fazer a conexão do ambiente de desenvolvimento com o BACKEND.

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
