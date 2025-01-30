const { Router } = require("express");
const { userModel } = require("../db");

const postRouter = Router();

postRouter.post("/signup", async function (req, res) {
  const { email, password, firstname, lastname } = req.body;

  await userModel.create({
    email: email,
    password: password,
    firstname: firstname,
    lastname: lastname,
  });

  res.json({
    message: "signup endpoint",
  });
});

postRouter.post("/signin", (req, res) => {
  res.json({
    message: "signin endpoint",
  });
});

module.exports = {
  postRouter: postRouter,
};
