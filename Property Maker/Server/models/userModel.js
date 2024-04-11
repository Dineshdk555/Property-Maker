const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    
  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },

  phonenumber: {
    type: Number,
    required: true,
  },
  zipcode: {
    type: Number,
    // required: true,
  },
  role:{
    type:String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  aflag: {
    type: Boolean,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("UserModel", userSchema);