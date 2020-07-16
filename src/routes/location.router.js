import express from "express";
import LocationController from "../controllers/location.controller";

const router = new express.Router();

router.get("/location/:ip?", LocationController.getLocation);

module.exports = router;
