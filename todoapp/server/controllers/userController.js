const userModel = require('../models/user');

function getUsers(){
      return new Promise((resolve,reject) => {
            userModel.getUsers().then((users) => {
                  resolve(users);
            }, (err) => {
                  reject(err);
            })
      });
}

module.exports = {
      getUsers
}
