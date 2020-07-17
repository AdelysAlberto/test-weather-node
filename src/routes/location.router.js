const express = require("express");
const LocationController = require("../controllers/location.controller");

const router = new express.Router();

router.get("/location/:ip?", LocationController.getLocation);

module.exports = router;
