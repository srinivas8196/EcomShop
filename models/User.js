const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const b7userdata = {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    password:{
        type:String,
    }
  };
// const Users  = new Schema({
 
//   username: String,
//    email: String,
//    password: String,

// });

const UserModel = mongoose.model('UserModel',b7userdata);
module.exports = UserModel;