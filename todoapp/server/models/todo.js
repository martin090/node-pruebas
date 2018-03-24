const {mongoose} = require('../db/mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
      text: {
            type: String,
            required: true,
            trim: true,
            minlength: 1
      },
      completed: {
            type: Boolean,
            default: false
      },
      completedAt: {
            type: Date,
            default: null
      },
      categorie:{
            type: String,
            required: true,
            enum: ['Personal', 'Facultad']
      }
});

var Todo = mongoose.model('Todos', todoSchema);

function getTodos(){
      return Todo.find();
}


function insertTodo(todo){
      todo.save().then(() => {
            console.log('Saved todo: ', task);
      }, (err) => {
            console.log('There was an error: ', err);
      });
}


module.exports = {
      insertTodo,
      getTodos,
      Todo
}
