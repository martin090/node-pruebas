const express = require('express');
const hbs = require('hbs');
const todoController = require('./controllers/todoController');
const userController = require('./controllers/userController');
const port = 3000;

var app = express();

app.set('view engine','hbs');

app.get('/todos',(req,res) => {
      todoController.getTodos().then((respuesta) => {
            res.render('listAllTodos.hbs',{
                  text: respuesta[0].text
            });
      })
      .catch((err) => {
            console.log(err);
      });

});

app.get('/users', (req,res) => {
      userController.getUsers().then((respuesta) => {
            res.render('listAllUsers.hbs',{
                  nombre: respuesta[0].nombre
            });
      })
      .catch((err) => {
            console.log(err);
      })
});


app.listen(port,() => {
      console.log('Server is listening on port: ', port);
});
