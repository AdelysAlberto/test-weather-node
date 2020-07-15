import WeatherException from "../config/custom-exception";

class CurrentService {
    async getCurrentWeather() {
        const getWeather = "Weather";
        return {
            status: 200,
            payload: getWeather
        };
    }
}

export default new CurrentService();
