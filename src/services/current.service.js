import Axios from "axios";

class CurrentService {
    async getCurrentWeather(city) {
        try {
            // console.log("ruta", `${process.env.URI_CURRENT_WEATHER}${city}${process.env.APPI_KEY_WEATHER}`);
            const { data } = await Axios.get(`${process.env.URI_CURRENT_WEATHER}${city}${process.env.APPI_KEY_WEATHER}`);
            if (!data) {
                throw Error();
            }
            const { main, weather } = data;
            return { weather, main };
        } catch (e) {
            throw Error();
        }
    }
}

export default new CurrentService();
