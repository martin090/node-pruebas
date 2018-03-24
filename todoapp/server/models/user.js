const {mongoose} = require('../db/mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
      email:{
            type: String,
            required: true
      },
      password:{
            type: String,
            required: true
      },
      nombre:{
            type: String,
            required: true
      },
      apellido: {
            type: String,
            required: true
      }
});

var User = mongoose.model('Users', UserSchema);

function getUsers(){
      return User.find();
}

module.exports = {
      getUsers
}
