import express from "express";
import ForecastController from "../controllers/forecast.controller";

const router = new express.Router();

router.get("/forecast/:city", ForecastController.getForecast);

module.exports = router;
