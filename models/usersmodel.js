const Joi = require('joi');
const mongoose = require('mongoose');


   //User Model
const User = mongoose.model('UserData', new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {           
    type: String,
    required: true,
    minlength: 7,
    maxlength: 50
  }, 
  password:{
    type: String,
    required: true,
    minlength: 8,
    maxlength: 80
  },  
   refferalBonus: {
    type: Number,
    required: true,
    minlength: 3,
    maxlength: 20
  },
  refferalCode: {
    type: String,                               //Recevie Referral Code
    required: true,
    minlength: 2,
    maxlength: 50
  },
  parentuser: {
    type: String,        //generate parent user referral code
    required: true,
  },
  childuser: {
    type: String,      //generate Child user referral code
    required: true,
  }
},{
  timestamps: true
}));

// Joi Validator
function validateUsers(user) {
  const schema = {
    username: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(7).max(50).required(),
    password: Joi.string().min(8).max(80).required(),
    refferalBonus: Joi.number().min(3).max(50).required(),
    refferalCode: Joi.string().min(2).max(50).required(),
    parentuser: Joi.string().required(),
    childuser: Joi.string().required()
  };

  return Joi.validate(user, schema);
}
exports.User = User; 
exports.validate = validateUsers;