const convertKelvinToCelsius = (kelvin) => {
    if (kelvin < (0)) {
        return "below absolute zero (0 K)";
    }
    return (kelvin - 273.15);
};

module.export = {
    convertKelvinToCelsius
};
