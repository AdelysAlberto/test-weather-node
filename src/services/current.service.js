const Axios = require("axios");

class CurrentService {
    async getCurrentWeather(city) {
        try {
            const { data } = await Axios.get(`${process.env.URI_CURRENT_WEATHER}${city}${process.env.APPI_KEY_WEATHER}`);
            if (!data) {
                throw Error();
            }

            const { name, main, weather } = data;
            return { name, country: data.sys.country, weather, main };
        } catch (e) {
            throw Error();
        }
    }
}

module.exports = new CurrentService();
