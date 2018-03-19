const request = require('request');

var getWeather = (lat,lon,callback) => {
      request({
            url: `https://api.darksky.net/forecast/325e8ed80cec06c5a8a4fe445af53e0b/${lat},${lon}`,
            json: true
      },(error, response, body) => {
            if (error){
                  callback('Unable to connect to Forecast.io servers');
            }else if(response.statusCode === 400){
                  callback('Unable to fetch wheater');
            }else if (response.statusCode === 200){
                  callback(undefined, {
                        temperature: body.currently.temperature,
                        apparentTemperature: body.currently.apparentTemperature
                  });
            }
      });
};

module.exports = {getWeather};
