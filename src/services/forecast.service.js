import Axios from "axios";

class ForecastService {
    async getForecast(city) {
        try {
            // console.log("ruta", `${process.env.URI_CURRENT_WEATHER}${city}${process.env.APPI_KEY_WEATHER}`);
            const { data } = await Axios.get(`${process.env.URI_FORECAST_WEATHER}${city}${process.env.APPI_KEY_WEATHER}`);

            if (!data) {
                throw Error();
            }

            return { data };
        } catch (e) {
            throw Error();
        }
    }
}

export default new ForecastService();
