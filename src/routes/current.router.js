import express from "express";
import currentController from "../controllers/current.controller";

const router = new express.Router();

router.get("/current/:city?", currentController.getCurrentWeather);

module.exports = router;
