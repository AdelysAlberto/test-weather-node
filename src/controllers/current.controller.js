import WeatherException from "../utils/custom-exception";
import currentService from "../services/current.service";

class CurrentController {
    async getCurrentWeather(req, res) {
        const { city } = req.params;
        try {
            const weather = await currentService.getCurrentWeather(city);
            res.status(200).send(weather);
        } catch (e) {
            res.status(404).send({ msg: "Weather Not found" });
            throw new WeatherException("Weather Not found");
        }
    }
}

export default new CurrentController();
