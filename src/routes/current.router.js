import express from "express";
import CurrentController from "../controllers/current.controller";

const router = new express.Router();

router.get("/current/:city", CurrentController.getCurrentWeather);

module.exports = router;
