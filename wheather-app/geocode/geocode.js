const request = require('request');

function geocodeAddress(address,callback){
      var addressEncoded = encodeURIComponent(address);
      request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded}`+'&key=AIzaSyDlyGwbl7_pNLf6JdA7X8fEexDBy1gbhBI',
            json: true
      }, (error,response,body) => {
            if(error){
                  callback('Unable to connect to Google Servers');
            } else if(body.status === 'ZERO_RESULTS'){
                  callback('Unable to find that address');
            } else if(body.status === 'OK'){
                  callback(undefined,{
                        address: body.results[0].formatted_address,
                        latitude: body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng
                  });
            }
      });
}

module.exports = {
      geocodeAddress
};
