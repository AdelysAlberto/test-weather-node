const WeatherException = require("../utils/custom-exception");
const forecastService = require("../services/forecast.service");
const locationController = require("./location.controller");

class ForecastController {
    async getForecast(req, res) {
        let { city } = req.params;
        if (!city) {
            const location = await locationController.getLocationToJson(req, res);
            city = location.city;
        }
        try {
            const weather = await forecastService.getForecast(city);
            res.status(200).send(weather);
        } catch (e) {
            res.status(404).send({ msg: "Weather Not found" });
            throw new WeatherException("Weather Not found");
        }
    }
}

module.exports = new ForecastController();
