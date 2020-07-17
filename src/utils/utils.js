const convertKelvinToCelsius = (kelvin) => {
    if (kelvin < (0)) {
        return "below absolute zero (0 K)";
    }
    return (kelvin - 273.15);
};

const getCurrentIP = (req) => {
    const forwarded = req.headers["x-forwarded-for"];

    return forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
};

const parseForecast = (objectData) => {
    const filterForecast = {
        weather: [],
        city: {}
    };
    objectData.list.forEach((weather) => {
        if (!filterForecast.weather.find((weather_) => {
            const compare1 = new Date(weather_.dt_txt).toLocaleDateString();
            const compare2 = new Date(weather.dt_txt).toLocaleDateString();
            return compare1 === compare2;
        })) {
            const { main, dt_txt } = weather;
            filterForecast.weather.push({ main, dt_txt });
        }
    });
    filterForecast.city = objectData.city;
    return filterForecast;
};

module.exports = { convertKelvinToCelsius, getCurrentIP, parseForecast };
