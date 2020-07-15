import WeatherException from "../config/custom-exception";

class ForecastService {
    async getCurrentWeather() {
        const getWeather = "Current";
        return {
            status: 200,
            payload: getWeather
        };
    }
}

export default new ForecastService();
