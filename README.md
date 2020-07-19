# test-weather-node

REST API to serve weather data and forecast consuming data from openWeather api, and geolocation by IP through ip-api

## used libraries
* axios
* cors
* dotenv
* express
* morgan
* swagger-jsdoc
* swagger-ui-express

## SWAGGER TEST ONLINE 
[Try me](https://wather-adalbeca.herokuapp.com/api-docs "API IN HEROKU")

## APP ONLINE HEROKU
[Try me](https://weather-adalbeca-react.herokuapp.com/ "APP IN HEROKU" )

## API REST ONLINE HEROKU
[Try me](https://wather-adalbeca.herokuapp.com/v1 "API IN HEROKU" )

## Installation and Setup Instructions

#### Begin:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  
`git clone https://github.com/AdelysAlberto/test-weather-node.git`  

---
#### before start api, configure enviroment (.env)
`PORT=9091
URI_IP_API=http://ip-api.com/json/
URI_CURRENT_WEATHER=http://api.openweathermap.org/data/2.5/weather?q=
URI_FORECAST_WEATHER=http://api.openweathermap.org/data/2.5/forecast?q=

// openWeather need register and API KEY
APPI_KEY_WEATHER=&appid=PUT API KEY HERE`


Installation:

`npm install`  

To Start Server Dev Mode:

`npm dev`  

To Build production version

`npm build`  

To execute build mode 

`npm start`  



## Swagger Docs
`http://localhost:9091/api-docs/`

####  Endoints available
`localhost:9091/v1/location/ip` 
`localhost:9091/v1/current/:city` 
`localhost:9091/v1/forecast/:city`
