# test-weather-node

API REST TO GET CURRENT WEATHER AND FORECAST WEATHER

## Installation and Setup Instructions

#### Begin:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server Dev Mode:

`npm dev`  

---
#### before start api, configure enviroment (.env)
`PORT=9091
URI_IP_API=http://ip-api.com/json/
URI_CURRENT_WEATHER=http://api.openweathermap.org/data/2.5/weather?q=
URI_FORECAST_WEATHER=http://api.openweathermap.org/data/2.5/forecast?q=
APPI_KEY_WEATHER=&appid={{ PUT API KEY HERE }}`


####  Endoints available
`localhost:9010/v1/location/ip` 
`localhost:9010/v1/current/:city` 
`localhost:9010/v1/forecast/:city`