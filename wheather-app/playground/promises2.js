const request = require('request');

var geocodeAddress = (address) => {
      return new Promise((resolve,reject) => {
            var addressEncoded = encodeURIComponent(address);
            request({
                  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded}`+'&key=AIzaSyDlyGwbl7_pNLf6JdA7X8fEexDBy1gbhBI',
                  json: true
            },(error,response,body) =>
                  {
                        if(error){
                              reject('Unable to connect to Google Servers');
                        } else if(body.status === 'ZERO_RESULTS'){
                              reject('Unable to find that address');
                        } else if(body.status === 'OK'){
                              resolve({address: body.results[0].formatted_address,
                                    latitude: body.results[0].geometry.location.lat,
                                    longitude: body.results[0].geometry.location.lng});
                        }
                  });
      })
};


geocodeAddress('Aconcagua 1523 Martin Coronado').then((location) => {
      console.log(JSON.stringify(location,undefined,2));
}).catch((errorMessage) => {
      console.error('There was an error: ', errorMessage);
})
