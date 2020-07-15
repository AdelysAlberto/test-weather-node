import WeatherException from "../config/custom-exception";

class LocationService {
    async getLocation() {
        const getWeather = "Current";
        return {
            status: 200,
            payload: getWeather
        };
    }
}

export default new LocationService();
