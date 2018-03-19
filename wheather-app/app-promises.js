const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
      .options({
            a: {
                  demand: true,
                  alias: 'address',
                  describe: 'address to fetch wather for',
                  string: true
            }
      })
      .help()
      .alias('help','h')
      .argv;


var addressEncoded = encodeURIComponent(argv.address);
var geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded}`+'&key=AIzaSyDlyGwbl7_pNLf6JdA7X8fEexDBy1gbhBI';

axios.get(geoCodeUrl).then((response) => {
      if(response.data.status === 'ZERO_RESULTS'){
            throw new Error('Unable to find that address.');
      }
      var lat = response.data.results[0].geometry.location.lat;
      var lng = response.data.results[0].geometry.location.lng;
      var weatherUrl = `https://api.darksky.net/forecast/325e8ed80cec06c5a8a4fe445af53e0b/${lat},${lng}`;
      console.log(response.data.results[0].formatted_address);
      return axios.get(weatherUrl);
}).then((response) => {
      var temperature = response.data.currently.temperature;
      var apparentTemperature = response.data.currently.apparentTemperature;
      console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((e) => {
      if(e.code === 'ENOTFOUND'){
            console.log('Unable to connect to API servers');
      }else{
            console.log(e.message);
      }
});
