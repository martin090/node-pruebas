var asynAdd = (a,b) => {
      return new Promise((resolve,reject) => {
            setTimeout(() => {
                  if (typeof a === 'number' && typeof b === 'number'){
                        resolve(a+b);
                  }else{
                        reject('Arguments must be numbers');
                  }
            },1500);
      });
}


asynAdd(4,4).then((res) => {
      console.log('Result: ',res);
      return asynAdd(res,'10')
}).then((res) => {
      console.log('Should be 18 = ', res);
}).catch((errorMessage) => {
      console.log('There was an error: ', errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//             //resolve('Hey. It worked!');
//             reject('Unable to fulfill promise');
//       },2500);
//
// });
//
//
// somePromise.then((message) => {
//       console.log('Success: ', message);
// }, (errorMessage) => {
//       console.log('Error: ', errorMessage);
// });
