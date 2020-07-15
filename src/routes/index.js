import express from "express";
import currentRouter from "./current.router";
import forecastRouter from "./forecast.router";

const router = new express.Router();

router.use("/v1", currentRouter, forecastRouter);

module.exports = router;
