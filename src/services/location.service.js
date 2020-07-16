import Axios from "axios";

class LocationService {
    async getLocation(ip) {
        try {
            const { data } = await Axios.get(`${process.env.URI_IP_API}${ip || ""}`);
            if (!data || data.status === "fail") {
                throw Error();
            }
            const { country, countryCode, regionName, city, lat, lon, query, isp } = data;

            return { country, countryCode, regionName, city, lat, lon, query, isp };
        } catch (e) {
            throw Error();
        }
    }
}

export default new LocationService();
