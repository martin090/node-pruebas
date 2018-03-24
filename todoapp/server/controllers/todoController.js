const todoModel = require('../models/todo');

function getTodos(){
      return new Promise((resolve,reject) => {
            todoModel.getTodos().then((respuesta) => {
                  resolve(respuesta);
            },(err) => {
                  reject(err);
            });
      });
}

module.exports = {
      getTodos
}
