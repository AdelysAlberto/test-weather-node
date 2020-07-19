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
            const compare1 = new Date(weather_.date).toLocaleDateString();
            const compare2 = new Date(weather.dt_txt).toLocaleDateString();
            return compare1 === compare2;
        })) {
            const body = {
                temp: weather.main.temp,
                humidity: weather.main.humidity,
                description: weather.weather[0].description,
                icon: weather.weather[0].icon
            };
            filterForecast.weather.push({ body, date: weather.dt_txt });
        }
    });
    filterForecast.city = objectData.city;
    return filterForecast;
};

module.exports = { convertKelvinToCelsius, getCurrentIP, parseForecast };
