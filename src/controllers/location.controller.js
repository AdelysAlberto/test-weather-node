import LocationService from "../services/location.service";
import WeatherException from "../utils/custom-exception";

class LocationController {
    async getLocation(req, res) {
        const { ip } = req.params;
        try {
            const location = await LocationService.getLocation(ip);
            res.status(200).send(location);
        } catch (e) {
            res.status(404).send({ msg: "Location Not found" });
            throw new WeatherException("Location Not found");
        }
    }
}

export default new LocationController();
