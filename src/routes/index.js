const express = require("express");
const currentRouter = require("./current.router");
const forecastRouter = require("./forecast.router");
const locationRouter = require("./location.router");

const router = new express.Router();

router.use("/", currentRouter, locationRouter, forecastRouter);

module.exports = router;
