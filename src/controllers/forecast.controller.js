const currentService = require("../services/current.service");

class ForecastController {
    async getForecast(req, res) {
        const {
            city
        } = req.params;

        res.send(city);
    }
}

export default new ForecastController();
