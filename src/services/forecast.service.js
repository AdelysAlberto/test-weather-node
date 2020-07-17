const Axios = require("axios");
const utils = require("../utils/utils");

class ForecastService {
    async getForecast(city) {
        try {
            // console.log("ruta", `${process.env.URI_CURRENT_WEATHER}${city}${process.env.APPI_KEY_WEATHER}`);
            const { data } = await Axios.get(`${process.env.URI_FORECAST_WEATHER}${city}${process.env.APPI_KEY_WEATHER}`);
            if (!data) {
                throw Error();
            }
            const dataParse = utils.parseForecast(data);
            return dataParse;
        } catch (e) {
            throw Error();
        }
    }
}

module.exports = new ForecastService();
