// getRoutes.js
const { Router } = require("express");
const getRouter = Router();

getRouter.get("/purchase", (req, res) => {
  try {
    res.status(200).json({
      message: "user purchase endpoint",
    });
  } catch (error) {
    console.error(error);
  }
});

getRouter.get("/home", (req, res) => {
  try {
    res.status(200).json({
      message: "Backend for course selling app",
    });
  } catch (error) {
    console.error(error);
  }
});

getRouter.get("/", (req, res) => {
  try {
    res.status(200).json({
      message: "/ endpoint",
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = {
  getRouter: getRouter, 
};