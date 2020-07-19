const LocationService = require("../services/location.service");
const WeatherException = require("../utils/custom-exception");
const { getCurrentIP } = require("../utils/utils");

class LocationController {
    async getLocation(req, res) {
        const { ip } = req.params || null;
        let getIP = ip || getCurrentIP(req);
        if (getIP === "::ffff:127.0.0.1" || "::1") {
            getIP = "186.22.238.226";
        }
        try {
            const location = await LocationService.getLocation(getIP);
            res.status(200).send(location);
        } catch (e) {
            res.status(404).send({ msg: "Location Not found" });
            throw new WeatherException("Location Not found");
        }
    }

    async getLocationToJson(req) {
        let getIP = getCurrentIP(req);
        if (getIP === "::ffff:127.0.0.1" || "::1") {
            getIP = "186.22.238.226";
        }
        try {
            const location = await LocationService.getLocation(getIP);
            return location;
        } catch (e) {
            throw new WeatherException("Location Not found");
        }
    }
}

module.exports = new LocationController();
