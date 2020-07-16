import WeatherException from "../utils/custom-exception";
import forecastService from "../services/forecast.service";

class ForecastController {
    async getForecast(req, res) {
        const { city } = req.params;
        try {
            const weather = await forecastService.getForecast(city);
            res.status(200).send(weather);
        } catch (e) {
            res.status(404).send({ msg: "Weather Not found" });
            throw new WeatherException("Weather Not found");
        }
    }
}

export default new ForecastController();
