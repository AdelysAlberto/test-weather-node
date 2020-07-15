const currentService = require("../services/current.service");

class LocationController {
    async getLocation(req, res) {
        const {
            city
        } = req.params;

        res.send(city);
    }
}

export default new LocationController();
