const express = require("express");
const app = express.Router();
const UserModel = require("../Model/User.Model");
const jwt = require("jsonwebtoken");
app.get("/", (req, res) => {
  res.send("this is user");
});

app.post("/add-user", async (req, res) => {
  const userDetails = req.body;

  try {
    await UserModel.create(userDetails);

    console.log(userDetails);

    res.send({
      message: "Account created successfully",
    });
  } catch (e) {
    res.send({
      message: "something went wrong",
      err: e.message,
    });
  }
});

app.post("/login-user", async (req, res) => {
  const { phoneumber, password } = req.body;

  console.log(phoneNumber, password);
  try {
    const user = await UserModel.findOne({ phoneNumber, password });
    if (user) {
      const token = jwt.sign(
        { id: user._id, name: user.name },
        "SECRETCODE123",
        {
          expiresIn: "10 day",
          // expiresIn: "1 hours",
        }
      );
      return res.send({
        message: "Login Success",
        token,
      });
    } else {
      return res.status(404).send("Invalid credential");
    }
  } catch (e) {
    return res.status(404).send(e.message);
  }
});

module.exports = app;
