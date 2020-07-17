const express = require("express");
const ForecastController = require("../controllers/forecast.controller");

const router = new express.Router();

router.get("/forecast/:city?", ForecastController.getForecast);

module.exports = router;
