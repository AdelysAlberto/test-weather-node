const express = require("express");
const currentController = require("../controllers/current.controller");

const router = new express.Router();

router.get("/current/:city?", currentController.getCurrentWeather);

module.exports = router;
