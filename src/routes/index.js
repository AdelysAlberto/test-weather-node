import express from "express";
import currentRouter from "./current.router";
import forecastRouter from "./forecast.router";
import locationRouter from "./location.router";

const router = new express.Router();

router.use("/v1", currentRouter, locationRouter, forecastRouter);

module.exports = router;
