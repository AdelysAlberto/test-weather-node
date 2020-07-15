const currentService = require("../services/current.service");

class CurrentController {
    async getCurrentWeather(req, res) {
        const {
            city
        } = req.params;

        res.send(city);
    }
}

export default new CurrentController();
