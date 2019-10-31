
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema for user
let UserShema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String,
    required :true,
    //validate: [{ validator: value => isEmail(value), msg: 'Invalid email.' }]

  },
  password: {
    type: String,
   required :true
  },
  date: {
    type: Date,
    default : Date.now
  },
  isrole: {
    type: String,
    default : "users"
  },
  avatar: {
    type: String,
    default : "avatar.jpg"
  },
  isEmailVerified:
  {
    type :Boolean ,
    default:false
  }
 ,
  follow:
  {
    type : Number ,
    default : 0
  }

});

module.exports = mongoose.model('users', UserShema);