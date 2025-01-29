const { Router } = require("express");

const postRouter = Router();

postRouter.post("/signup", (req, res) => {
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
  postRouter: postRouter
};


